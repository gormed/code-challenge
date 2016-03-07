// used to validate the stages type
var stageTypes = {
    'trip': true,
    'work': true
};

/**
 * Defines a stage in a Service
 * @param stageJSON json resource to construct the object
 * @constructor
 */
function Stage(stageJSON) {
    this.timestamp = {
        start: new Date(stageJSON.timestamp.start),
        end: new Date(stageJSON.timestamp.end)
    };
    // validate the stage type
    if (stageTypes.hasOwnProperty(stageJSON.type)) {
        this.type = stageJSON.type;
    } else {
        throw TypeError("Invalid Stage Type!");
    }
    this.annotation = stageJSON.annotation ? stageJSON.annotation : "";
}

Stage.prototype = {
    get type() {
        return this._type;
    },
    set type(val) {
        this._type = val;
    },
    get startTime() {
        return getSimpleTimeString(this.timestamp.start);
    },
    set startDate(date) {
        if (!(date instanceof Date)) throw TypeError("No Date object given!");
        this.timestamp.start = date;
    },
    get endTime() {
        return getSimpleTimeString(this.timestamp.end);
    },
    // duration in hours
    get duration() {
        var hours = Math.abs(this.timestamp.end - this.timestamp.start) / 36e5;
        return sprintf("%2.2f h", hours);
    },
    // this will effectively set the end-date to (start-date + val), expects hours
    set duration(val) {
        this.timestamp.end = new Date(this.timestamp.start);
        this.timestamp.end.setHours(this.timestamp.end.getHours()+val);
    },

    get annotation() {
        return this._annotation;
    },
    set annotation(val) {
        this._annotation = val;
    }
};