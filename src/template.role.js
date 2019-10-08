module.exports = {
    creepTemplate: {
        'worker': {
            'Small': {
                requiredEnergy: 200,
                bodyContent: [WORK, CARRY, MOVE]
            },
            'Medium': { // Need energy of entire spawn
                requiredEnergy: 300,
                bodyContent: [WORK, WORK, CARRY, MOVE]
            },
            'Big': { // Need energy of entire spawn and 5 full extensions
                requiredEnergy: 550,
                bodyContent: [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]
            },
        }
    },
    roleTypeToJob: {
        'harvester': 'worker',
        'upgrader': 'worker',
        'builder': 'worker'
    }
}