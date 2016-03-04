/**
 * Created by Hans on 04.03.2016.
 */
function Material(materialJSON) {
    this.materialNo = materialJSON.materialNo;
    this.description = materialJSON.description;
    this.materialCode = materialJSON.materialCode;
    this.quantity = parseInt(materialJSON.quantity);
    this.annotation = materialJSON.annotation;
}