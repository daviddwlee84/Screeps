function buildRoadFromAToB(ObjA, ObjB) {
    var route = ObjA.pos.findPathTo(ObjB.pos);
    for (var i = 0; i < route.length; i++) {
        // Assume ObjA and ObjB is in same room
        ObjA.room.createConstructionSite(route[i].x, route[i].y, STRUCTURE_ROAD);
    }
}

module.exports = {
    // Currently, just use it as a script
    // You can execute it in several ticks that there may be other paths,
    // since maybe sometimes a creeps will block on the way anyway
    buildRoadFromSpawnToSources: function (spawn) {
        var sources = Game.spawns[spawn].room.find(FIND_SOURCES);
        for (var j = 0; j < sources.length; j++) {
            buildRoadFromAToB(Game.spawns[spawn], sources[j])
        }
    },
    buildRoadFromSourceToController: function (sourceObjId) {
        var source = Game.getObjectById(sourceObjId)
        buildRoadFromAToB(source, source.room.controller)
    }
}