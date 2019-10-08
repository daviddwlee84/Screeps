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
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {
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
                            structure.structureType == STRUCTURE_TOWER) &&
                        structure.energy < structure.energyCapacity;
                }
            });
            if (targets.length > 0) {
                creep.memory.idleCount = 0
                // If found a structure, then transfer energy to the nearest target
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {
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