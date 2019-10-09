// Find some regular things

module.exports = {
    findDamagedStructWithRatio: {
        Closest: function (obj, toFind, ratio) {
            var closestDamagedStructure = obj.pos.findClosestByRange(toFind, {
                filter: (structure) => structure.hits < structure.hitsMax * ratio
            })
            return closestDamagedStructure
        },
        Lowest: function (obj, toFind, ratio) {
            var damagedStructures = obj.room.find(toFind, {
                filter: (structure) => structure.hits < structure.hitsMax * ratio
            });
            // Repair the structure with lowest hit points
            sortedDamagedStructure = _.sortBy(damagedStructures, s => s.hits)
            return sortedDamagedStructure[0]
        }
    }

}