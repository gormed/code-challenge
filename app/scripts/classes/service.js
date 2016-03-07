/**
 * Sample definition of a Service item
 * @param serviceJSON json resource to construct the object
 * @constructor
 */
function Service(serviceJSON) {
    this.metaInfo = {
        systemRecovery: new Date(serviceJSON.metaInfo.systemRecovery),
        distance: parseInt(serviceJSON.metaInfo.distance)
    };
    this.stages = [];
    for (var i = 0; i < serviceJSON.stages.length; ++i) {
        var stageJSON = serviceJSON.stages[i];
        this.stages.push(new Stage(stageJSON));
    }
    this.materialList = [];
    for (i = 0; i < serviceJSON.materialList.length; ++i) {
        var materialJSON = serviceJSON.materialList[i];
        this.materialList.push(new Material(materialJSON));
    }

    this.customerFeedback = null;
}

Service.prototype = {
    get recoveryTime() {
        return getSimpleTimeString(this.metaInfo.systemRecovery);
    },
    get distance() {
        return this.metaInfo.distance + "km";
    },
    get customerFeedback() {
        return this._customerFeedback;
    },
    set customerFeedback(val) {
        if (val == null) {
            this._customerFeedback = {
                contactName: "",
                contactNotAvailable: false,
                contactSignature: null
            };
            return;
        }
        // validate feedback, name has to be given, if contact was available the signature must not be empty
        if (val.hasOwnProperty('contactName') && val.contactName.length > 1 &&
            val.hasOwnProperty('contactNotAvailable') &&
            val.hasOwnProperty('contactSignature')) {
            if (!val.contactNotAvailable &&
                val.contactSignature.hasOwnProperty('isEmpty') &&
                !val.contactSignature.isEmpty) {
                this._customerFeedback = {
                    contactName: val.contactName,
                    contactNotAvailable: val.contactNotAvailable,
                    contactSignature: val.contactSignature
                }
            } else {
                this._customerFeedback = {
                    contactName: val.contactName,
                    contactNotAvailable: val.contactNotAvailable,
                    contactSignature: null
                };
            }
        } else {
            throw TypeError("Feedback could not be validated.");
        }
    },
    canSubmit: function () {
        return this._customerFeedback.contactSignature != null && !this._customerFeedback.contactSignature.isEmpty;
    }
};