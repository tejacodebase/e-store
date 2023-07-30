import { ArtCategory } from './art-category.model';

export class ArtCategoryService {
  
  constructor() { }

  categories: ArtCategory[] = [
    new ArtCategory(null, 'Portrait', null, null, 'assets/images/art-categories/1.jpg', null, null, null, null),
    new ArtCategory(null, 'Slider', null, null, 'assets/images/art-categories/2.jpg', null, null, null, null),
    new ArtCategory(null, 'Oil Painting', null, null, 'assets/images/art-categories/3.jpg', null, null, null, null),
    new ArtCategory(null, 'Abstract', null, null, 'assets/images/art-categories/4.jpg', null, null, null, null),
    new ArtCategory(null, 'Original', null, null, 'assets/images/art-categories/5.jpg', null, null, null, null),
    new ArtCategory(null, 'Water Color', null, null, 'assets/images/art-categories/6.jpg', null, null, null, null)
  ];
}
