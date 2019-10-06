// Move harvesting logic to role.harvester
// Require manually create creeps in concole
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester2' );
// ...

var roleHarvester = require('role.harvester');

module.exports.loop = function () {

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}