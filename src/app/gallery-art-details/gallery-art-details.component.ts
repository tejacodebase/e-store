import { Component, OnInit, ViewChild } from '@angular/core';
import { Art } from '../arts/art.model';
import { GalleryService } from '../gallery/gallery.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { CartService } from '../cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gallery-art-details',
  templateUrl: './gallery-art-details.component.html',
  styleUrls: ['./gallery-art-details.component.scss']
})
export class GalleryArtDetailsComponent implements OnInit {
  artType : string = "Orginal";
  selectedArt: Art;
  @ViewChild('myModal') myModal;

  constructor(private galleryService: GalleryService, private cartService: CartService,
    private storageService: LocalStorageService, private toastr: ToastrService) { }

  ngOnInit() {
    this.galleryService.artSelected.subscribe(
      (art: Art) => {
        console.log(art);
        this.selectedArt = art;
      }
    );
    if (this.galleryService.selectedArt) {
      this.selectedArt = this.galleryService.selectedArt;
    } else {
      this.selectedArt = this.storageService.getLocalStorage("selectedArt");
    }
  }

  addToCart() {
    this.cartService.addToCart(this.selectedArt, this.artType == "Orginal");
  }

  buyProduct(art: Art) {
    // Todo
  }

  openArtModel() {
    this.myModal.nativeElement.style.display = "block";
    this.myModal.nativeElement.classList.add("in");
  }
}
