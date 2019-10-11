module.exports = {
    creepTemplate: {
        'worker': { // Work in base, just care about efficiency
            'Little': { // The most basic one with all the necessary abilities
                requiredEnergy: 200,
                bodyContent: [WORK, CARRY, MOVE]
            },
            'Small': { // Need energy of entire spawn
                requiredEnergy: 300,
                bodyContent: [WORK, WORK, CARRY, MOVE]
            },
            'Medium': { // Need energy of entire spawn and 5 full extensions (RCL 2)
                requiredEnergy: 550,
                bodyContent: [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]
            },
            'Big': { // Need energy of entire spawn and 10 full extensions (RCL 3)
                requiredEnergy: 800,
                bodyContent: [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]
            },
            'Large': { // Need energy of entire spawn and 20 full extensions (RCL 4)
                requiredEnergy: 1300,
                bodyContent: [WORK, WORK, WORK, WORK, WORK, WORK,
                    CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
                    MOVE, MOVE, MOVE, MOVE
                ]
            },
        },
        'remoteWorker': { // Work across rooms/maps
            // i.e. The remote harvester
            'Carrier': { // Need energy of entire spawn and 10 full extensions (RCL 3)
                requiredEnergy: 800,
                bodyContent: [WORK, WORK,
                    CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
                    MOVE, MOVE, MOVE, MOVE,
                    TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH
                ]
            },
            // Collect the dropped energy?!
            'Collector': { // Need energy of entire spawn and 10 full extensions (RCL 3)
                requiredEnergy: 800,
                bodyContent: [WORK,
                    CARRY, CARRY, CARRY, CARRY,
                    MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                    TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH
                ]
            },
        }
    },
    roleTypeToJob: {
        'harvester': 'worker',
        'upgrader': 'worker',
        'builder': 'worker',
        // Just a simple projection
        'worker': 'worker',
        'remoteWorker': 'remoteWorker'
    }
}