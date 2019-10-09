// Methods that shared within different roles

module.exports = {
    // ==== Harvest ====
    // --- Harvest in the same room ---
    harvestClosestValidEnergy: function (creep) {
        // Only harvest the closest energy sources that is active 
        var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source, {
                visualizePathStyle: {
                    stroke: '#ffaa00'
                }
            });
        }
    },
    harvestEnergyByIndex: function (creep, index) {
        // Only harvest a specific energy source
        var sources = creep.room.find(FIND_SOURCES);
        if (index < sources.length) {
            if (creep.harvest(sources[index]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[index], {
                    visualizePathStyle: {
                        stroke: '#ffaa00'
                    }
                });
            }
        } else {
            console.log(`${creep.name} attempts to harvest source with index ${index} >= ${sources.length} is not valid`)
        }
    }
    // --------------------------------
}