/**
 * RCL based configurations/constants
 * 
 * Spawn: Order with priority (Now assume all the same roleType will use same creepSize)
 */

module.exports = {
    0: {

    },
    1: {
        Spawn: {
            'harvester': {
                creepSize: 'Little',
                minAmount: 3
            },
            'upgrader': {
                creepSize: 'Small',
                minAmount: 1
            },
        }
    },
    2: {
        Spawn: {
            'harvester': {
                creepSize: 'Little',
                minAmount: 4
            },
            'upgrader': {
                creepSize: 'Medium',
                minAmount: 2
            },
            'builder': {
                creepSize: 'Little',
                minAmount: 2
            },
        }
    },
    3: {
        Spawn: {
            'harvester': {
                creepSize: 'Medium',
                minAmount: 4
            },
            'upgrader': {
                creepSize: 'Big',
                minAmount: 1
            },
            'builder': {
                creepSize: 'Medium',
                minAmount: 3
            },
        }
    },
    4: {
        Spawn: {
            'harvester': {
                creepSize: 'Medium',
                minAmount: 4
            },
            'upgrader': {
                creepSize: 'Big',
                minAmount: 1
            },
            'builder': {
                creepSize: 'Medium',
                minAmount: 2
            },
        }
    }
}