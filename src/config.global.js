/**
 * The global configurations/constants
 */


module.exports = {
    // ==== Reparation ====
    REPAIR: {
        // TARGET: Target "Type" that need to be repair
        // SPECIFIC: Structure type that need to filter out. (Use array, and if not specific then use undefined)
        // EXCLUDE?!: If use specific then it will ignore this.
        // RATIO: Minimum percentage of hit point that need repair by
        TOWER: {
            TARGET: FIND_STRUCTURES,
            SPECIFIC: [STRUCTURE_ROAD, STRUCTURE_RAMPART, STRUCTURE_WALL],
            RATIO: 0.5
        },
        BUILDER: {
            TARGET: FIND_MY_STRUCTURES,
            SPECIFIC: undefined,
            RATIO: 1
        }
    },
    // ==== Energy Target ====
    ENERGY: {
        HARVEST: {
            // TODO
        },
        TRANSFER: { // Transfer to
            TARGET: FIND_MY_STRUCTURES,
            // Priority: Extension > Spawn because Spawn will regenerate by itself
            // STRUCTURE_STORAGE here seems doesn't work?!
            // Current hard-coded by using `creep.room.storage`
            SPECIFIC: [STRUCTURE_EXTENSION, STRUCTURE_SPAWN, STRUCTURE_TOWER, STRUCTURE_STORAGE]
        },
    }
}