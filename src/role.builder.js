/*
 * Role of Builder
 * 1. If not carrying energy or building or reparing then go harvest
 * 2. If the carry capacity is full then go building (switch to building mode) or go reparing (switch to reparining mode)
 * 3. If in building mode then go find a construction site
 * 3. If in reparing mode then go find a closest damaged structure
 * 4. If in harvest mode then go find a energy source
 */

var BUILDER_REPAIR_CONFIG = require('config').REPAIR.BUILDER
var damagedStructFilter = require('filter').findDamagedStructWithRatio
var commonMethod = require('common.role')

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if ((creep.memory.building || creep.memory.reparing) && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.memory.reparing = false;
            creep.memory.idleCount = 0;
            creep.say('🔄 harvest');
        }

        // TODO: when switch role they may have a status that creep.carry.energy is either 0 or full

        if ((!creep.memory.building && !creep.memory.reparing) && creep.carry.energy == creep.carryCapacity) {
            var toBuild = Math.random() < 0.5;
            creep.memory.building = toBuild;
            creep.memory.reparing = !toBuild;
            toBuild ? creep.say('🚧 build') : creep.say('🔧 repair');
        }

        if (creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length) {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {
                        visualizePathStyle: {
                            stroke: '#ffffff'
                        }
                    });
                }
            } else {
                // Nothing to build, go to repair
                creep.memory.building = false;
                creep.memory.reparing = true;
                creep.memory.idleCount += 1
                creep.say('🔧 repair');
            }
        } else if (creep.memory.reparing) {
            // Repair the closest own structure (will skip walls since it's neutral structure)
            // var structure = findDamagedStructWithRatio.Closest(creep, BUILDER_REPAIR_CONFIG.TARGET, BUILDER_REPAIR_CONFIG.RATIO);
            var structure = damagedStructFilter.Lowest(creep, BUILDER_REPAIR_CONFIG.TARGET, BUILDER_REPAIR_CONFIG.RATIO);
            if (structure) {
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure, {
                        visualizePathStyle: {
                            stroke: '#aaff00'
                        }
                    });
                }
            } else {
                // Nothing to repair
                creep.memory.building = true;
                creep.memory.reparing = false;
                creep.memory.idleCount += 1
                creep.say('🚧 build')
            }
        } else { // Harvest
            commonMethod.harvestEnergyByIndex(1)
        }
    }
};

module.exports = roleBuilder;