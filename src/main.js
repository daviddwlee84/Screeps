// Move harvesting logic to role.harvester
// Require manually create creeps in concole
// Creeps
// Harvester: Harvesters are to harvest energy source 
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1', { memory: { role: 'harvester' } } );
// Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], 'HarvesterBig', { memory: { role: 'harvester' } } );
// ...
// Upgrader: Upgraders are to upgrade the controller level (https://docs.screeps.com/control.html)
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1', { memory: { role: 'upgrader' } } );
// ...
// Builder: Builders are to build the construction site and also repair stuff
// Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder' } } );
// Set Role Memory
// Games.creeps['CreepsName'].memory.role = 'roleType'
// Suicide
// Game.creeps['Harvester1'].suicide()
// Build Structure
// Extension
// Game.rooms['W25S17'].createConstructionSite( 32, 36, STRUCTURE_EXTENSION );
// Tower
// Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );
// Activate safe mode
// Game.spawns['Spawn1'].room.controller.activateSafeMode();

// Roles
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

// Functions
var countAndRespawn = require('autospawn')

module.exports.loop = function () {

    for (var name in Game.rooms) {
        // Showing the current energy that we have
        console.log('Room "' + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
    }

    for (var name in Memory.creeps) {
        // Clear creeps' memory whenever it dies
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // Respawn with priority
    var success = countAndRespawn('harvester', 2)
    if (!success) {
        var success = countAndRespawn('upgrader', 2)
    }
    if (!success) {
        var success = countAndRespawn('builder', 2)
    }

    // For each creeps sent it to do their role's job
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