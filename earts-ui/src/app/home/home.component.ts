import { Component, OnDestroy, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common"; 
import { HomeService } from './home.service';
import { Arts } from '../arts/arts.model';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ImageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  arts: Arts[] = [];
  intervel: any;
  currentIndex: number = 0;
  currentImage: string = '';

  constructor(private homeService: HomeService) {}

  images = [
    'assets/images/sliders/slider-1.jpg',
    'assets/images/sliders/slider-2.jpg',
    'assets/images/sliders/slider-3.jpg',
    'assets/images/sliders/slider-4.jpg',
    'assets/images/sliders/slider-5.jpg',
  ];

  ngOnInit() {
    console.log('In Parent Init');
    this.homeService.subscriptions.push(
      this.homeService.artsUpdated.subscribe((arts: Arts[]) => {
        this.arts = arts;
      })
    );
    this.fetchArts();
  }

  fetchArts() {
    this.homeService.subscriptions.push(
      this.homeService.getHomepageArts().subscribe((arts: Arts[]) => {
        this.arts = arts;
      })
    );
  }

  getNextImage() {
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.currentImage = this.images[this.currentIndex];
    console.log(this.currentIndex);
  }

  ngOnDestroy(): void {}
}
