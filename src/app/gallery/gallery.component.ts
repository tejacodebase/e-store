import { Component, OnInit } from '@angular/core';
import { ArtCategory } from '../art-categories/art-category.model';
import { ArtCategoryService } from '../art-categories/art-category.service';
import { GalleryService } from './gallery.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  artCategories: ArtCategory[];

  constructor(private artCategoryService: ArtCategoryService, private galleryService: GalleryService,
    private storageService : LocalStorageService, private router: Router) {
  }

  ngOnInit() {
    this.artCategories = this.artCategoryService.categories;
  }

  showCategoryArts(artCategory: ArtCategory) {
    console.log('Emitted');
    this.router.navigate(['galleryArts']);
    this.galleryService.selectedCategory = artCategory;
    this.galleryService.categorySelected.emit(artCategory);
    this.storageService.setLocalStorage("selectedCategory", artCategory);
  }
}
