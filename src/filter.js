// Find some regular things

var Filters = {
    // ==== Common ====
    // Without priority
    findClosestStruct: function (obj, toFind, orderList, additionalFilterFunction) {
        if (orderList == undefined) {
            // Just find the structure
            return obj.pos.findClosestByRange(toFind);
        }

        // Find the closest target with all structure type that mentioned
        var target = obj.pos.findClosestByRange(toFind, {
            filter: (structure) => {
                var select = false;
                for (var i = 0; i < orderList.length; i++) {
                    select |= (structure.structureType == orderList[i])
                }
                if (additionalFilterFunction) {
                    select &= additionalFilterFunction(structure)
                }
                return select;
            }
        });

        return target;
    },
    findClosestStructByPriority: function (obj, toFind, orderList, additionalFilterFunction) {
        if (orderList == undefined) {
            // Just find the structure
            return obj.pos.findClosestByRange(toFind);
        }

        // Find the target in order with structure type
        for (var i = 0; i < orderList.length; i++) {
            var targets = obj.room.find(toFind, {
                filter: (structure) => {
                    var select = (structure.structureType == orderList[i])
                    if (additionalFilterFunction) {
                        select &= additionalFilterFunction(structure)
                    }
                    return select;
                }
            });

            if (targets.length > 0) {
                // Find the closest structure
                return _.sortBy(targets, t => obj.pos.getRangeTo(t))[0]
            }
        }

        // Found nothing
        return undefined;
    },
    // REPAIR_CONFIG must has the same format as it in config.js
    // Currently
    // REPAIR_CONFIG = {
    //     TARGET: find_structure_type,
    //     SPECIFIC: [structure1, structure2], or undefined
    //     RATIO: 0 <= x <= 1
    // }
    findDamagedStructWithRatio: {
        Closest: function (obj, REPAIR_CONFIG) {
            if (REPAIR_CONFIG.SPECIFIC == undefined) {
                var closestDamagedStructure = obj.pos.findClosestByRange(REPAIR_CONFIG.TARGET, {
                    filter: (structure) => structure.hits < structure.hitsMax * REPAIR_CONFIG.RATIO
                })
            } else {
                var closestDamagedStructure = Filters.findClosestStruct(obj, REPAIR_CONFIG.TARGET, REPAIR_CONFIG.SPECIFIC,
                    (structure) => structure.hits < structure.hitsMax * REPAIR_CONFIG.RATIO)
                // var closestDamagedStructure = Filters.findClosestStructByPriority(obj, REPAIR_CONFIG.TARGET, REPAIR_CONFIG.SPECIFIC,
                //     (structure) => structure.hits < structure.hitsMax * REPAIR_CONFIG.RATIO)
            }
            return closestDamagedStructure
        },
        Lowest: function (obj, REPAIR_CONFIG) {
            if (REPAIR_CONFIG.SPECIFIC == undefined) {
                var damagedStructures = obj.room.find(REPAIR_CONFIG.TARGET, {
                    filter: (structure) => structure.hits < structure.hitsMax * REPAIR_CONFIG.RATIO
                });
            } else {
                var damagedStructures = obj.room.find(REPAIR_CONFIG.TARGET, {
                    filter: (structure) => {
                        var select = false;
                        for (var i = 0; i < REPAIR_CONFIG.SPECIFIC.length; i++) {
                            select |= (structure.structureType == REPAIR_CONFIG.SPECIFIC[i])
                        }
                        select &= structure.hits < structure.hitsMax * REPAIR_CONFIG.RATIO
                        return select
                    }
                });
            }
            // Repair the structure with lowest hit points
            return _.sortBy(damagedStructures, s => s.hits)[0];
        }
    }
}

module.exports = Filters