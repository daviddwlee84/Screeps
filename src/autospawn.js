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
    respawnRole: function (spawn, roleType, creepSize) {
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