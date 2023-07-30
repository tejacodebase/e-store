import { ArtCategory } from '../art-categories/art-category.model';

export class Art {

    public oid: number;
    public title: String;
    public shortDescreption: String;
    public longDescreption: String;
    public copyPrice: number;
    public price: number;
    public width: number;
    public length: number;
    public height: number;
    public category: String;
    public medium: String;
    public weight: number;
    public homeVisibility: Boolean;
    public packageCharges: number;
    public discount: number;
    public sortOrder: number;
    public imageUrl: String;
    public imagePath: String;
    public status: String;
    public ref1: String;
    public ref2: String;
    public ref3: String;
    public activeFlag: Boolean;
    public createdDate: Date;
    public modifiedDate: Date;
    public deletedDate: Date;
    public createdBy: String;
    public modifiedBy: String;
    public deletedBy: String;
    public deleteFlag: Boolean;
    public imageOid: number;
    public artCategory: ArtCategory;


    constructor(oid: number, title: String, imageUrl: String, shortDescreption: String, longDescreption: String, copyPrice: number, price: number,
                width: number, length: number, height: number, category: String, medium: String, weight: number,
                packageCharges: number, discount: number, sortOrder: number, imagePath: String, status: String,
                ref1: String, ref2: String, ref3: String, activeFlag: Boolean, createdDate: Date, modifiedDate: Date,
                deletedDate: Date, createdBy: String, modifiedBy: String, deletedBy: String, deleteFlag: Boolean, imageOid: number,
                homeVisibility: Boolean, artCategory: ArtCategory) {
        this.oid = oid;
        this.title = title;
        this.shortDescreption = shortDescreption;
        this.longDescreption = longDescreption;
        this.copyPrice = copyPrice;
        this.price = price;
        this.width = width;
        this.length = length;
        this.height = height;
        this.category = category;
        this.medium = medium;
        this.weight = weight;
        this.homeVisibility = homeVisibility;
        this.packageCharges = packageCharges;
        this.discount = discount;
        this.sortOrder = sortOrder;
        this.imageUrl = imageUrl;
        this.imagePath = imagePath;
        this.status = status;
        this.ref1 = ref1;
        this.ref2 = ref2;
        this.ref3 = ref3;
        this.activeFlag = activeFlag;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.deletedDate = deletedDate;
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
        this.deletedBy = deletedBy;
        this.deleteFlag = deleteFlag;
        this.imageOid = imageOid;
        this.artCategory = artCategory;
    }
}