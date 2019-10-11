/*
 * Role of Harvester
 * 1. If it is able to carry energy then go find a source
 * 2. Carry the energy back to spawn when it is full
 */

var ENERGY_CONFIG = require('config').ENERGY
var commonMethod = require('common.role')
var findClosestStructByPriority = require('filter').findClosestStructByPriority

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.harvesting = false;
            creep.say('🔃transfer')
        }
        // If creep still has energy, then go find other target
        if (!creep.memory.harvesting && creep.carry.energy > 0) {
            var target = findClosestStructByPriority(creep,
                ENERGY_CONFIG.TRANSFER.TARGET, ENERGY_CONFIG.TRANSFER.SPECIFIC,
                (structure) => structure.energy < structure.energyCapacity
            );
            if (target) {
                creep.memory.idleCount = 0
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