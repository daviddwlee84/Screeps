var capitalizeFirstLetter = require('utils')

var countAndRespawn = function (roleType, count) {
    var workers = _.filter(Game.creeps, (creep) => creep.memory.role == roleType);
    var workerName = capitalizeFirstLetter(roleType)
    console.log(workerName + 's: ' + workers.length);

    // Currently the "[WORK, CARRY, MOVE]" will need 200 energy
    if (Game.spawns['Spawn1'].room.energyAvailable < 200) {
        // Not enough energy
        return false;
    }

    if (workers.length < count) {
        var newName = workerName + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], newName, {
            memory: {
                role: roleType
            }
        });
    } else {
        // Enough Worker
        return false;
    }

    if (Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y, {
                align: 'left',
                opacity: 0.8
            });
    }

    return true;
}

module.exports = countAndRespawn