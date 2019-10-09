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
// Rampart
// Game.rooms['W25S17'].createConstructionSite( 27, 44, STRUCTURE_RAMPART );
// Tower
// Game.spawns['Spawn1'].room.createConstructionSite( 30, 43, STRUCTURE_TOWER );
// Activate safe mode
// Game.spawns['Spawn1'].room.controller.activateSafeMode();

// Roles
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

// Functions
var spawnCommander = require('autospawn')
var towerCommander = require('tower')

// Scripts
// var building = require('building')

module.exports.loop = function () {

    // Use these when needed
    // building.buildRoadFromSpawnToSources('Spawn1')
    // building.buildRoadFromSourceToController('5bbcab8e9099fc012e633ca6')

    for (var name in Game.rooms) {
        // Showing the current energy that we have
        console.log('Room "' + name + '" has ' + Game.rooms[name].energyAvailable + ' energy');
        towerCommander.defendRoom(name)
    }

    for (var name in Memory.creeps) {
        // Clear creeps' memory whenever it dies
        if (!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    // Respawn with priority
    var spawn = Game.spawns['Spawn1'];
    if (!spawn.spawning) { // Spawn is idle
        var success = spawnCommander.countAndRespawn(spawn, 'harvester', 'Medium', 3)
        if (!success) {
            var success = spawnCommander.countAndRespawn(spawn, 'upgrader', 'Big', 1)
        }
        if (!success) {
            var success = spawnCommander.countAndRespawn(spawn, 'builder', 'Medium', 2)
        }
    } else { // Spawning something
        spawnCommander.showSpawnInfo(spawn)
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