
export class ArtCategory {

    oid: Number;
    name: String;
    descreption: String;
    homeVisibility: Boolean;
    sortOrder: Number;
    imageUrl: String;
    imageOid: Number;
    deleteFlag: Boolean;
    activeFlag: Boolean;

    constructor(oid: Number, name: String, descreption: String, sortOrder: Number, imageUrl: String, activeFlag: Boolean,
        deleteFlag: Boolean, imageOid: Number, homeVisibility: Boolean) {
        this.oid = oid;
        this.name = name;
        this.descreption = descreption;
        this.homeVisibility = homeVisibility;
        this.sortOrder = sortOrder;
        this.imageUrl = imageUrl;
        this.activeFlag = activeFlag;
        this.deleteFlag = deleteFlag;
        this.imageOid = imageOid;
    }
}