var TOWER_REPAIR_CONFIG = require('config').REPAIR.TOWER
var damagedStructFilter = require('filter').findDamagedStructWithRatio

module.exports = {
    // Order all the tower in that room attack or repair the structure
    defendRoom: function (roomName) {
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
        var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {
                filter: {
                    structureType: STRUCTURE_TOWER
                }
            });
        if (hostiles.length > 0) { // Attack hostiles
            var username = hostiles[0].owner.username;
            Game.notify(`User ${username} spotted in room ${roomName}`);
            towers.forEach(tower => tower.attack(hostiles[0]));
        } else { // Otherwise repair the closest damaged structure (including walls)
            towers.forEach(tower => {
                var closestDamagedStructure = damagedStructFilter.Closest(tower, TOWER_REPAIR_CONFIG.TARGET, TOWER_REPAIR_CONFIG.RATIO)
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                }
            });
        }
    },
}