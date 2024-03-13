export class Arts {
  public uuid: string;
  public title: string;
  public artCategoryUuid: string;
  public shortDescreption: string;
  public longDescreption: string;
  public artLength: number;
  public width: number;
  public height: number;
  public category: string;
  public medium: string;
  public weight: number;
  public copyPrice: number;
  public price: number;
  public packageCharges: number;
  public discount: number;
  public homeVisibility: number;
  public sortOrder: number;
  public imageUrl: string;
  public image: string;
  public imageUuid: string;
  public status: string;
  public ref1: string;
  public ref2: string;
  public ref3: string;
  public activeFlag: number;
  public createdBy: string;
  public createdDate: Date;
  public modifiedBy: string;
  public modifiedDate: Date;
  public deletedBy: string;
  public deletedDate: Date;
  public deleteFlag: number

  constructor(uuid: string, title: string, artCategoryUuid: string, shortDescreption: string, 
    longDescreption: string, artLength: number, width: number, height: number, category: string, 
    medium: string, weight: number, copyPrice: number, price: number, packageCharges: number, 
    discount: number, homeVisibility: number, sortOrder: number, imageUrl: string, image: string, 
    imageUuid: string, status: string, ref1: string, ref2: string, ref3: string, activeFlag: number, 
    createdBy: string, createdDate: Date, modifiedBy: string, modifiedDate: Date, deletedBy: string, 
    deletedDate: Date, deleteFlag: number) {

      this.uuid = uuid;
      this.title = title;
      this.artCategoryUuid = artCategoryUuid;
      this.shortDescreption = shortDescreption;
      this.longDescreption = longDescreption;
      this.artLength = artLength;
      this.width = width;
      this.height = height;
      this.category = category;
      this.medium = medium;
      this.weight = weight;
      this.copyPrice = copyPrice;
      this.price = price;
      this.packageCharges = packageCharges;
      this.discount = discount;
      this.homeVisibility = homeVisibility;
      this.sortOrder = sortOrder;
      this.imageUrl = imageUrl;
      this.image = image;
      this.imageUuid = imageUuid;
      this.status = status;
      this.ref1 = ref1;
      this.ref2 = ref2;
      this.ref3 = ref3;
      this.activeFlag = activeFlag;
      this.createdBy = createdBy;
      this.createdDate = createdDate;
      this.modifiedBy = modifiedBy;
      this.modifiedDate = modifiedDate;
      this.deletedBy = deletedBy;
      this.deletedDate = deletedDate;
      this.deleteFlag = deleteFlag;
  }
}
