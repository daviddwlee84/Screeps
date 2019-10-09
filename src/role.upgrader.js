/*
 * Role of Upgrader
 * 1. If it is able to carry energy then go find a source
 * 2. Carry the energy to the controller and upgrade it
 */

var commonMethod = require('common.role')

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }

        if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('⚙️ upgrade')
        }

        if (!creep.memory.upgrading) {
            commonMethod.harvestEnergyByIndex(0)
        } else {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {
                    visualizePathStyle: {
                        stroke: '#ffffff'
                    }
                });
            }
        }
    }
};

module.exports = roleUpgrader;