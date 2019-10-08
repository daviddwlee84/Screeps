// Auto-spawn creeps

/**
 * TODO: if use larger one harvester, then if there are no energy in the extensions
 * because the maximum capacity of spawn is 300
 * (and it will regenerate 1 energy per tick but won't share with extension)
 * so there is a chance that a harvester can't be built
 */

var capitalizeFirstLetter = require('utils')

module.exports = {
    countAndRespawn: function (spawn, roleType, count) {
        var workers = _.filter(Game.creeps, (creep) => creep.memory.role == roleType);
        var workerName = capitalizeFirstLetter(roleType)
        console.log(workerName + 's: ' + workers.length);

        // Currently the "[WORK, CARRY, MOVE]" will need 200 energy
        // Currently the "[WORK, WORK, CARRY, MOVE]" will need 300 energy
        // Currently the "[WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]" will need 550 energy
        if (spawn.room.energyAvailable < 300) {
            // Not enough energy
            return false;
        }

        if (workers.length < count) {
            var newName = workerName + Game.time;
            console.log('Spawning new harvester: ' + newName);
            spawn.spawnCreep([WORK, WORK, CARRY, MOVE], newName, {
                memory: {
                    role: roleType
                }
            });
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