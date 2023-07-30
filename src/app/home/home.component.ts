import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageSources = ['assets/images/sliders/slider-1.jpg', 'assets/images/sliders/slider-2.jpg',
                  'assets/images/sliders/slider-3.jpg', 'assets/images/sliders/slider-4.jpg',
                  'assets/images/sliders/slider-5.jpg'];
}
