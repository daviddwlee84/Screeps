/**
 * The global configurations/constants
 */


module.exports = {
    // ==== Reparation ====
    REPAIR: {
        // TARGET: Target "Type" that need to be repair
        // RATIO: Minimum percentage of hit point that need repair by
        TOWER: {
            TARGET: FIND_STRUCTURES,
            RATIO: 0.5
        },
        BUILDER: {
            TARGET: FIND_MY_STRUCTURES,
            RATIO: 0.05
        }
    }
}