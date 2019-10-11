var RCL_CONFIG = require('config.rcl')
var capitalizeFirstLetter = require('utils')
var spawnCommander = require('autospawn')


var countWorker = function (roleType, total) {
    // Now assume all the same roleType will use same creepSize
    var workers = _.filter(Game.creeps, (creep) => creep.memory.role == roleType);
    var workerName = capitalizeFirstLetter(roleType)
    console.log(`${workerName}s: ${workers.length}/${total}`);
    return workers.length
}

module.exports = {
    main: function (spawn) {
        RCLLevel = spawn.room.controller.level;
        toSpawn = RCL_CONFIG[RCLLevel].Spawn;
        for (var roleType in toSpawn) {
            var amount = countWorker(roleType, toSpawn[roleType].minAmount);
            toSpawn[roleType].count = amount;
        }

        if (!spawn.spawning) {
            // Respawn with priority
            for (var roleType in toSpawn) {
                if (toSpawn[roleType].count < toSpawn[roleType].minAmount) {
                    var ret = spawnCommander.respawnRole(spawn, roleType, toSpawn[roleType].creepSize);
                    if (ret == OK) {
                        break;
                    } else if (ret == ERR_NOT_ENOUGH_ENERGY) {
                        console.log(`Waiting for more energy (${roleType} pending in room ${spawn.room.name})`)
                        break;
                    }
                }
            }
        } else { // Spawning something
            spawnCommander.showSpawnInfo(spawn)
        }
    }
}