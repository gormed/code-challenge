/**
 * Created by Hans on 04.03.2016.
 */

function Service(serviceJSON) {
    this.metaInfo = {
        recovery: serviceJSON.metaInfo.recovery
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
}