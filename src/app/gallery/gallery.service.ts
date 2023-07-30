import { EventEmitter } from '@angular/core';
import { ArtCategory } from '../art-categories/art-category.model';
import { Art } from '../arts/art.model';
import { Subject } from 'rxjs';

export class GalleryService {
  categorySelected = new EventEmitter<ArtCategory>();
  artSelected = new EventEmitter<Art>();
  selectedCategory : ArtCategory;
  selectedArt : Art;
  catagories : ArtCategory[] = [];

  constructor() { }

}