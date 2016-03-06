/**
 * Created by Hans on 04.03.2016.
 */

function getSimpleTimeString(date) {
    if (!(date instanceof Date)) throw TypeError("No Date object given!");

    var minutes = date.getMinutes();
    var hours = date.getHours();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    return hours + ":" + minutes;
}