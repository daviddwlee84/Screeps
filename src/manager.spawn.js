var RCL_CONFIG = require('config.rcl');
var capitalizeFirstLetter = require('utils');
var creepTemplate = require('template.role').creepTemplate;
var roleTypeToJob = require('template.role').roleTypeToJob;

function countWorker(roleType, total) {
    // Now assume all the same roleType will use same creepSize
    var workers = _.filter(Game.creeps, (creep) => creep.memory.role == roleType);
    var workerName = capitalizeFirstLetter(roleType);
    console.log(`${workerName}s: ${workers.length}/${total}`);
    return workers.length;
}

function respawnRole(spawn, roleType, creepSize) {
    // Get specific creep type by its role and size
    var creepType = creepTemplate[roleTypeToJob[roleType]][creepSize];
    if (spawn.room.energyAvailable < creepType.requiredEnergy) {
        // Not enough energy
        return ERR_NOT_ENOUGH_ENERGY;
    }
    var workerName = capitalizeFirstLetter(roleType)
    var newName = workerName + creepSize + Game.time;
    console.log('Spawning new harvester: ' + newName);
    return spawn.spawnCreep(creepType.bodyContent, newName, {
        memory: {
            role: roleType,
            size: creepSize,
            idleCount: 0
        }
    });
}

function showSpawnInfo(spawn) {
    var spawningCreep = Game.creeps[spawn.spawning.name];
    var progress = ((1 - spawn.spawning.remainingTime / spawn.spawning.needTime) * 100).toFixed();
    spawn.room.visual.text(
        '🛠️' + spawningCreep.memory.role + ` (${progress}%)`,
        spawn.pos.x + 1,
        spawn.pos.y, {
            align: 'left',
            opacity: 0.8
        });
}

module.exports = {
    main: function (spawn) {
        // Spawn creeps based on RCL (room controller level)
        RCL = spawn.room.controller.level;
        toSpawn = RCL_CONFIG[RCL].Spawn;
        for (var roleType in toSpawn) {
            var amount = countWorker(roleType, toSpawn[roleType].minAmount);
            toSpawn[roleType].count = amount;
        }

        if (!spawn.spawning) {
            // Respawn with priority
            for (var roleType in toSpawn) {
                if (toSpawn[roleType].count < toSpawn[roleType].minAmount) {
                    var ret = respawnRole(spawn, roleType, toSpawn[roleType].creepSize);
                    if (ret == OK) {
                        break;
                    } else if (ret == ERR_NOT_ENOUGH_ENERGY) {
                        console.log(`Waiting for more energy (${roleType} pending in room ${spawn.room.name})`);
                        break;
                    }
                }
            }
        } else { // Spawning something
            showSpawnInfo(spawn);
        }
    }
}