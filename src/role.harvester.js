/*
 * Role of Harvester
 * 1. If it is able to carry energy then go find a source
 * 2. Carry the energy back to spawn when it is full
 */

var commonMethod = require('common.role')

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = false;
            creep.say('🔃transfer')
        }
        // If creep still has energy, then go find other target
        if (!creep.memory.harvesting && creep.carry.energy > 0) {
            // Priority: Extension > Spawn because Spawn will regenerate by itself?!
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
                            stroke: '#ffaa00'
                        }
                    });
                }
            } else if (creep.carry.energy == creep.carryCapacity) {
                // No where to go (no valid target and can't go harvest)
                creep.memory.idleCount += 1
            } else {
                // No valid target but have capacity
                creep.memory.harvesting = true;
                creep.say('🔄 harvest');
            }
        } else if (!creep.memory.harvesting && creep.carry.energy == 0) {
            creep.memory.harvesting = true;
            creep.say('🔄 harvest');
        }

        if (creep.memory.harvesting) {
            commonMethod.harvestClosestValidEnergy(creep)
        }
    }
};

module.exports = roleHarvester;