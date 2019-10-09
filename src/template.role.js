module.exports = {
    creepTemplate: {
        'worker': {
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
                bodyContent: [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
                    CARRY, CARRY, CARRY, CARRY,
                    MOVE, MOVE, MOVE, MOVE
                ]
            },
        }
    },
    roleTypeToJob: {
        'harvester': 'worker',
        'upgrader': 'worker',
        'builder': 'worker'
    }
}