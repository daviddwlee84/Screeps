// Move harvesting logic to role.harvester
// Require manually create creeps in concole
// Harvester
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1', { memory: { role: 'harvester' } } );
// Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], 'HarvesterBig', { memory: { role: 'harvester' } } );
// ...
// Upgrader
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1', { memory: { role: 'upgrader' } } );
// ...
// Builder
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder' } } );
// Set Role Memory
// Games.creeps['CreepsName'].memory.role = 'roleType'
// Build Structure
// Build Extension
// Game.rooms['W25S17'].createConstructionSite(32, 36, STRUCTURE_EXTENSION, ['Extension1']) 

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder')

module.exports.loop = function () {

    for (var name in Game.rooms) {
        // Showing the current energy that we have
        console.log('Room "' + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
    }

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}