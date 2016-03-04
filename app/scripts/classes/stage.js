/**
 * Created by Hans on 04.03.2016.
 */


var stageTypes = {
    'trip': "Trip",
    'work': "Work"
};

function Stage(stageJSON) {
    this.timestamp = {
        start: new Date(stageJSON.timestamp.start),
        end: new Date(stageJSON.timestamp.end)
    };
    if (stageTypes.hasOwnProperty(stageJSON.type)) {
        this.type = stageTypes[stageJSON.type];
    } else {
        throw TypeError("Invalid Stage Type!");
    }
    this.annotation = stageJSON.annotation ? stageJSON.annotation : "";
}

Stage.prototype = {
    getType: function () {
        return this.type;
    },
    getStartTime: function () {
        return this.timestamp.start.getHours() + ":" + this.timestamp.start.getMinutes();
    },
    getDuration: function () {
        return Math.abs(this.timestamp.end - this.timestamp.start) / 36e5;
    }
};