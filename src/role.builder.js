/*
 * Role of Builder
 * 1. If not carrying energy or building or repairing then go harvest
 * 2. If the carry capacity is full then go building (switch to building mode) or go repairing (switch to reparining mode)
 * 3. If in building mode then go find a construction site
 * 3. If in repairing mode then go find a closest damaged structure
 * 4. If in harvest mode then go find a energy source
 */

var BUILDER_REPAIR_CONFIG = require('config').REPAIR.BUILDER
var damagedStructFilter = require('filter').findDamagedStructWithRatio
var commonMethod = require('common.role')

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if ((creep.memory.building || creep.memory.repairing) && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.memory.repairing = false;
            creep.memory.idleCount = 0;
            creep.say('🔄 harvest');
        }

        // TODO: when switch role they may have a status that creep.carry.energy is either 0 or full

        if ((!creep.memory.building && !creep.memory.repairing) && creep.carry.energy == creep.carryCapacity) {
            var toBuild = Math.random() < 0.5;
            creep.memory.building = toBuild;
            creep.memory.repairing = !toBuild;
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
                creep.memory.repairing = true;
                creep.memory.idleCount += 1
                creep.say('🔧 repair');
            }
        } else if (creep.memory.repairing) {
            if (creep.memory.target == undefined) {
                var structure = damagedStructFilter.Lowest(creep, BUILDER_REPAIR_CONFIG);
            } else {
                var structure = Game.getObjectById(creep.memory.target);
            }
            if (structure && structure.hits < structure.hitsMax * BUILDER_REPAIR_CONFIG.RATIO) {
                creep.memory.target = structure.id; // Remeber the last target it repaired
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structure, {
                        visualizePathStyle: {
                            stroke: '#aaff00'
                        }
                    });
                }
            } else {
                // Nothing to repair or Structure is been repaired
                creep.memory.building = true;
                creep.memory.repairing = false;
                creep.memory.target = undefined
                creep.memory.idleCount += 1
                creep.say('🚧 build')
            }
        } else { // Harvest
            commonMethod.harvestEnergyByIndex(creep, 1)
        }
    }
};

module.exports = roleBuilder;