'use strict';

/**
 * Defines a material used in a Service
 * @param materialJSON json resource to construct the object
 * @constructor
 */
function Material(materialJSON) {
    this.materialNo = materialJSON.materialNo;
    this.description = materialJSON.description;
    this.materialCode = materialJSON.materialCode;
    this.quantity = parseInt(materialJSON.quantity);
    this.annotation = materialJSON.annotation;
}

Material.prototype = {
    get materialNo() {
        return this._materialNo;
    },
    set materialNo(val) {
        this._materialNo = val;
    },

    get description() {
        return this._description;
    },
    set description(val) {
        this._description = val;
    },

    get materialCode() {
        return this._materialCode;
    },
    set materialCode(val) {
        this._materialCode = val;
    },

    get quantity() {
        return this._quantity;
    },
    set quantity(val) {
        this._quantity = val;
    },

    get annotation() {
        return this._annotation;
    },
    set annotation(val) {
        this._annotation = val;
    }
};
