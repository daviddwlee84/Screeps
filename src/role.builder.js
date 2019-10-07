/*
 * Role of Builder
 * 1. If not carrying energy or building or reparing then go harvest
 * 2. If the carry capacity is full then go building (switch to building mode) or go reparing (switch to reparining mode)
 * 3. If in building mode then go find a construction site
 * 3. If in reparing mode then go find a closest damaged structure
 * 4. If in harvest mode then go find a energy source
 */

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if ((creep.memory.building || creep.memory.reparing) && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.memory.reparing = false;
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
            }
        } else if (creep.memory.reparing) {
            var closestDamagedStructure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if (closestDamagedStructure) {
                creep.repair(closestDamagedStructure);
            }
        } else {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {
                    visualizePathStyle: {
                        stroke: '#ffaa00'
                    }
                });
            }
        }
    }
};

module.exports = roleBuilder;