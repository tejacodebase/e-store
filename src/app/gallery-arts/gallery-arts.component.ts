import { Component, OnInit } from '@angular/core';
import { Art } from 'src/app/arts/art.model';
import { ArtsService } from 'src/app/arts/arts.service';
import { ArtCategory } from 'src/app/art-categories/art-category.model';
import { GalleryService } from '../gallery/gallery.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-arts',
  templateUrl: './gallery-arts.component.html',
  styleUrls: ['./gallery-arts.component.scss']
})
export class GalleryArtsComponent implements OnInit {
  
  arts: Art[] = [];
  public selectedCategory = {} as ArtCategory;
  // private subscription : Subscription;
  
  constructor(private artService: ArtsService, private galleryService: GalleryService,
    private storageService: LocalStorageService, private router : Router) { }

  ngOnInit() {
    // this.subscription = 
    this.galleryService.categorySelected.subscribe(
      (artCat: ArtCategory) => {
        console.log(artCat);
        this.selectedCategory = artCat;
      });

    if (this.galleryService.selectedCategory) {
      this.selectedCategory = this.galleryService.selectedCategory;
    } else {
      this.selectedCategory = this.storageService.getLocalStorage("selectedCategory");
    }
    this.galleryService.selectedCategory
    // Fetching arts
    this.arts = this.artService.getArts();
  }

  gotoArtDetails(art: Art) {
    this.galleryService.artSelected.emit(art);
    this.storageService.setLocalStorage('selectedArt', art);
    this.router.navigate(['artDetails']);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
