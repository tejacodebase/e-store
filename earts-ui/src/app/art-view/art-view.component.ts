import { AfterContentInit, Component, HostBinding, OnInit } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload'; 
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ArtsService } from '../arts/arts.service';
import { Arts } from '../arts/arts.model';
import { SkeletonModule } from 'primeng/skeleton';
import { CartService } from '../cart/cart.service';


@Component({
  selector: 'app-art-view',
  standalone: true,
  imports: [FileUploadModule, CommonModule, ImageModule, SkeletonModule],
  templateUrl: './art-view.component.html',
  styleUrl: './art-view.component.css'
})
export class ArtViewComponent implements OnInit,  AfterContentInit {
  @HostBinding('artForm') artForm: FormGroup = <FormGroup>{};
  selectedArt: Arts = <Arts>{};
  selectedUuid: string = '';
  errorMessage: string = '';

  constructor(private artsService: ArtsService, private route: ActivatedRoute,
    private router: Router, private cartService: CartService) {
  }

  ngOnInit() {
    // this.artsService.artSubscriptions.push(
    //   );

  }

  ngAfterContentInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedUuid = params['uuid'];
      this.getArt();
      console.log('Got art ' +this.selectedUuid);
    })
  }

  getArt() {
    console.log('In getArt');
    
    //if (this.selectedUuid != '') {
      this.artsService.artSubscriptions.push(
        this.artsService.getArt(this.selectedUuid).subscribe((art: Arts) => {
          if (art == null || art.uuid == null) {
            this.selectedArt = <Arts>{};
          } else {
            this.selectedArt = art;
            console.log('Got art ' +art.uuid);
          }
          //TODO: fill the form
          // this.fillForm();
        })
      );
   // }
  }

  ngOnDestroy(): void {
    // this.deptFetchSub.unsubscribe();
  }

  private fillForm() {
    try {
      this.artForm = new FormGroup({
        uuid: new FormControl(this.selectedUuid),
      });
    } catch (error) {
      // Handle the exception
      console.error('An error occurred:', error);
    }
  }

  addOrginalArtCart(): void {
    this.cartService.addItemToCart(this.selectedArt, true);
  }

  addPrintArtCart(): void {
    this.cartService.addItemToCart(this.selectedArt, false);
  }
}
