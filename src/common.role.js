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
            // API docs: https://docs.screeps.com/api/#Creep.harvest
            switch (creep.harvest(sources[index])) {
                case ERR_NOT_IN_RANGE:
                    creep.moveTo(sources[index], {
                        visualizePathStyle: {
                            stroke: '#ffaa00'
                        }
                    });
                    break;

                case ERR_NOT_ENOUGH_RESOURCES:
                    // Go find droped energy if nothing to harvest
                    // Otherwise, go to nearby position and standby
                    if (this.collectDroppedEnergy(creep) == undefined) {
                        var route = creep.pos.findPathTo(sources[index]);
                        if (route.length > 3) { // Go to nearby (3 path away) position and stay
                            creep.moveTo(route[route.length - 3].x, route[route.length - 3].y, {
                                visualizePathStyle: {
                                    stroke: '#ffaa00'
                                }
                            });
                        } else {
                            creep.say('😕 waiting');
                        }
                    }
                    break;

                default:
                    // OK
                    // ERR_NOT_OWNER
                    // ERR_BUSY
                    // ERR_NOT_FOUND
                    // ERR_INVALID_TARGET
                    // ERR_TIRED
                    // ERR_NO_BODYPART
                    break;
            }
        } else {
            console.log(`${creep.name} attempts to harvest source with index ${index} >= ${sources.length} is not valid`);
        }
    },
    // --------------------------------
    // ==== Collect ====
    collectDroppedEnergy: function (creep) {
        var source = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
        if (source) {
            if (creep.pickup(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {
                    visualizePathStyle: {
                        stroke: '#aaaa00'
                    }
                });
            }
        }
        return source;
    }
}