// Auto-spawn creeps

/**
 * TODO: if use larger one harvester, then if there are no energy in the extensions
 * because the maximum capacity of spawn is 300
 * (and it will regenerate 1 energy per tick but won't share with extension)
 * so there is a chance that a harvester can't be built
 */

var capitalizeFirstLetter = require('utils')
var creepTemplate = require('template.role').creepTemplate
var roleTypeToJob = require('template.role').roleTypeToJob

module.exports = {
    countAndRespawn: function (spawn, roleType, creepSize, count) {
        var workers = _.filter(Game.creeps, (creep) => creep.memory.role == roleType);
        var workerName = capitalizeFirstLetter(roleType)
        console.log(workerName + 's: ' + workers.length);
        // Now assume all the same roleType will use same creepSize
        // var sameSizeWorkers = _.filter(Game.creeps, (creep) => creep.memory.role == roleType && creep.memory.size == creepSize);
        // console.log(workerName + creepSize + 's: ' + sameSizeWorkers.length);

        // Get specific creep type by its role and size
        var creepType = creepTemplate[roleTypeToJob[roleType]][creepSize];
        if (spawn.room.energyAvailable < creepType.requiredEnergy) {
            // Not enough energy
            return false;
        }

        if (!spawn.spawning && workers.length < count) {
            var newName = workerName + creepSize + Game.time;
            console.log('Spawning new harvester: ' + newName);
            var ret = spawn.spawnCreep(creepType.bodyContent, newName, {
                memory: {
                    role: roleType,
                    size: creepSize,
                    idleCount: 0
                }
            });
            if (ret != OK) {
                return false;
            }
        } else {
            // Enough Worker
            return false;
        }

        return true;
    },
    showSpawnInfo: function (spawn) {
        var spawningCreep = Game.creeps[spawn.spawning.name];
        var progress = ((1 - spawn.spawning.remainingTime / spawn.spawning.needTime) * 100).toFixed()
        spawn.room.visual.text(
            '🛠️' + spawningCreep.memory.role + ` (${progress}%)`,
            spawn.pos.x + 1,
            spawn.pos.y, {
                align: 'left',
                opacity: 0.8
            });
    }
}