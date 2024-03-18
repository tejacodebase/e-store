import { Component } from '@angular/core';
import { Arts } from '../arts/arts.model';
import { GalleryService } from './gallery.service';
import { DataView, DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';




@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, DataViewModule, DropdownModule, RatingModule, ButtonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  arts: Arts[] = [];

  constructor(private galleryService: GalleryService, private router: Router) {}

  ngOnInit() {
    console.log('In Parent Init');
    this.galleryService.subscriptions.push(
      this.galleryService.artsUpdated.subscribe((arts: Arts[]) => {

        this.arts = arts;
      })
    );
    this.fetchArts();
  }

  fetchArts() {
    this.galleryService.subscriptions.push(
      this.galleryService.getGalleryArts().subscribe((arts: Arts[]) => {
        this.arts = arts;
      })
    );
  }
 
  selectArt(art: Arts) {
    this.galleryService.selectedArt = art;
    this.router.navigate(['art-view', art.uuid]);
  }
  
  ngOnDestroy(): void {

  }
}
