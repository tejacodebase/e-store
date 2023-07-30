import { Injectable } from '@angular/core';
import { Art } from './art.model';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {
  sampleArts: Art[];
  arts: Art[];

  constructor() { }

  // shortDescreption: String, longDescreption: String, copyPrice: Number, price: Number,
  // width: Number, length: Number, height: Number, category: String, medium: String, weight: Number,
  // packageCharges: Number, discount: Number, sortOrder: Number, imagePath: String, status: String,
  // ref1: String, ref2: String, ref3: String, activeFlag: Boolean, createdDate: Date, modifiedDate: Date,
  // deletedDate: Date, createdBy: String, modifiedBy: String, deletedBy: String, deleteFlag: Boolean, imageOid: Number,
  // homeVisibility: Boolean, artCategory: ArtCategory

  getSampleArts() {
    if (!this.sampleArts) {
      this.sampleArts = [
        new Art(1, "Art 1", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors "
        , null, 2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null, null),
        new Art(2, "Art 2", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null,
          2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null, null),
        new Art(3, "Art 3", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null,
          2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null, null),
        new Art(4, "Art 4", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null,
          2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null, null),
        new Art(5, "Art 5", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null,
          2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null, null),
        new Art(6, "Art 6", "assets/images/art-categories/1.jpg", "Very good art with canvas and water colors Very good art with canvas and water colors Very good art with canvas and water colors ", null,
          2000, 12000, 100, 200, 50, null, 'Canvas', 1, 200, null, null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null, null)
      ];
    }
    return this.sampleArts;
  }

  getArts() {
    return this.getSampleArts();
  }
}
