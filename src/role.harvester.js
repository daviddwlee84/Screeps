/*
 * Role of Harvester
 * 1. If it is able to carry energy then go find a source
 * 2. Carry the energy back to spawn when it is full
 */

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.carry.energy < creep.carryCapacity) {
            // Harvest energy when the capacity is not full
            // Only harvest the closest energy sources that is active 
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {
                    visualizePathStyle: {
                        stroke: '#ffaa00'
                    }
                });
            }
        } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                // Find structure that is extension or spawn which energy is not full
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            // TODO: remove tower when we have Maintainer
                            structure.structureType == STRUCTURE_TOWER) &&
                        structure.energy < structure.energyCapacity;
                }
            });
            if (targets.length > 0) {
                creep.memory.idleCount = 0
                // Transfer the energy source to the closest target
                sortedByRangeTarget = _.sortBy(targets, t => creep.pos.getRangeTo(t))
                target = sortedByRangeTarget[0]
                // If found a structure, then transfer energy to the nearest target
                if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    });
                }
            } else {
                creep.memory.idleCount += 1
            }
        }
    }
};

module.exports = roleHarvester;