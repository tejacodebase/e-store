import { Component, HostBinding, OnInit } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { Arts } from '../arts.model';
import { ArtsService } from '../arts.service'; 
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { ImageStorageService } from '../../shared/image-storage.service';

@Component({
  selector: 'app-art-details',
  standalone: true,
  imports: [FileUploadModule, CommonModule, ReactiveFormsModule, ImageModule],
  templateUrl: './art-details.component.html',
  styleUrl: './art-details.component.css',
})
export class ArtDetailsComponent implements OnInit {
  @HostBinding('artForm') artForm: FormGroup = <FormGroup>{};
  selectedArt: Arts = <Arts>{};
  selectedUuid: string = '';
  isEdit: boolean = false;
  isNew: boolean = false;
  actionMode: string = '';
  errorMessage: string = '';


  constructor(private artsService: ArtsService, private route: ActivatedRoute, private router: Router,
    private imageStorageService: ImageStorageService) {
    console.log('In Child Constructor');
  }

  ngOnInit() {
    console.log('In Child Init');
    this.artsService.artSubscriptions.push(
      this.route.params.subscribe((params: Params) => {
        // Checking if its URL have new
        const segments = this.route.snapshot.url;
        this.isNew = segments.some((segment) => segment.path === 'new');
        this.selectedUuid = params['uuid'];
        this.artFormInit();
      })
    );
  }

  artFormInit() {
    if (this.selectedUuid != '') {
      this.artsService.artSubscriptions.push(
        this.artsService.getArt(this.selectedUuid).subscribe((art: Arts) => {
          if (art == null || art.uuid == null) {
            this.selectedArt = <Arts>{};
            this.isEdit = true;
          } else {
            this.selectedArt = art;
            this.isEdit = false;
          }
          //TODO: fill the form
          this.fillForm();
        })
      );
    }
  }

  onArtFormSubmit() {
    
    if(!this.selectedArt.image) {
      this.errorMessage = "Please Upload Art Image!!"
      return;
    }
    if(!this.artForm.valid) {
      return;
    }
    // TODO: prepare Arts Object for saving
    this.fillArtFromForm();

    if (this.isNew) {
      this.artsService.artSubscriptions.push(
        this.artsService.createArt(this.selectedArt).subscribe(
          (artObj: Object) => {
            const newArts: Arts = { ...artObj } as Arts;
            this.selectedArt.image = 'data:image/png;base64, ' +this.selectedArt.image;
            this.fetchArts();
            this.router.navigate(['arts/' + newArts.uuid]);
          },
          (err) => {
            console.log(err);
          }
        )
      );
    } else {
      this.artsService.artSubscriptions.push(
        this.artsService.editArt(this.selectedUuid, this.selectedArt).subscribe(
          (data: Object) => {
            this.router.navigate(['arts/' + this.selectedUuid]);
            this.selectedArt.image = 'data:image/png;base64, ' +this.selectedArt.image;
            this.fetchArts();
          },
          (err) => {
            console.log(err);
          }
        )
      );
    }
    this.isEdit = false;
  }

  fetchArts() {
    this.artsService.artSubscriptions.push(
      this.artsService.getArts().subscribe((depts: Arts[]) => {
        this.artsService.artsUpdated.next(depts);
      })
    );
  }

  onNewInit() {
    this.isEdit = true;
    this.router.navigate(['arts/new']);
    // this.fillForm();
  }

  onEdit() {
    this.isEdit = true;
  }

  onUpdate() {
    this.isEdit = false;
  }

  onEditCancel() {
    this.isEdit = false;
  }

  onDeleteInit() {}

  onDelete() {
    const isDelete = confirm('Are you sure you want to delete?');
    if (isDelete) {
      this.artsService.artSubscriptions.push(
        this.artsService.deleteArt(this.selectedUuid).subscribe(
          (data: any) => {
            this.fetchArts();
            this.router.navigate(['arts']);
            this.isEdit = false;
            this.isNew = false;
          },
          (error: any) => {
            console.log(error);
          }
        )
      );
    }
  }

  ngOnDestroy(): void {
    // this.deptFetchSub.unsubscribe();
  }

  onUpload(event: any) {
    let fileReader = new FileReader();
    for (let file of event.files) {
      fileReader.readAsDataURL(file);

      // fileReader.onload = () => {
      //   //  base64 here 
      //   this.selectedArt.image = fileReader.result as string;
      // };

      fileReader.onloadend = () => {
        // Base64-encoded image data
        const base64EncodedImage: string = fileReader.result as string;
        this.selectedArt.image = base64EncodedImage;
        this.imageStorageService.saveImageToAssets(base64EncodedImage, this.selectedUuid);
      };
    }
  }

  private fillForm() {
    try {
      if (!this.selectedUuid) {
        this.selectedArt = <Arts>{};
        console.log('setting selectedArt to null');
      }
      if(this.selectedArt.image){
        try{
          // this.selectedArt.image = atob(this.selectedArt.image);
          if(!this.selectedArt.image.includes('data:image/png;base64')) {
            // const img = 'data:image/png;base64, ' + this.selectedArt.image;
            // this.selectedArt.image = img;
            // alert('Adding data:image/png;base64,')
            this.selectedArt.image = 'data:image/png;base64, ' +this.selectedArt.image;
            // alert(this.selectedArt.image);
          }
          // console.log(this.selectedArt.image);
          // this.selectedArt.image = this.selectedArt.image.replace('', 'data:image/png;base64,');
        } catch(e){
          console.log('Error while image Decode: ' +e);
          
        }
      }
      this.artForm = new FormGroup({
        uuid: new FormControl(this.selectedUuid),
        title: new FormControl(this.selectedArt.title, Validators.required),
        artCategoryUuid: new FormControl(this.selectedArt.artCategoryUuid),
        shortDescreption: new FormControl(this.selectedArt.shortDescreption, Validators.required),
        longDescreption: new FormControl(this.selectedArt.longDescreption),
        artLength: new FormControl(this.selectedArt.artLength),
        width: new FormControl(this.selectedArt.width),
        height: new FormControl(this.selectedArt.height),
        category: new FormControl(this.selectedArt.category, Validators.required),
        medium: new FormControl(this.selectedArt.medium),
        weight: new FormControl(this.selectedArt.weight),
        copyPrice: new FormControl(this.selectedArt.copyPrice, Validators.required),
        price: new FormControl(this.selectedArt.price, Validators.required),
        packageCharges: new FormControl(this.selectedArt.packageCharges),
        discount: new FormControl(this.selectedArt.discount),
        homeVisibility: new FormControl(this.selectedArt.homeVisibility),
        sortOrder: new FormControl(this.selectedArt.sortOrder),
        imageUrl: new FormControl(this.selectedArt.imageUrl),
        image: new FormControl(null),
        status: new FormControl(this.selectedArt.status),
        createdDate: new FormControl(this.selectedArt.createdDate),
      });
    } catch (error) {
      // Handle the exception
      console.error('An error occurred:', error);
    }
  }

  fillArtFromForm() {
    var data = this.artForm.value;
    try{
      this.selectedArt.image = this.selectedArt.image.replace('data:image/jpeg;base64,', '');
      this.selectedArt.image = this.selectedArt.image.replace('data:image/png;base64,', '');
    } catch(e){
      console.log('Error while encoding: '+e);
    }

    if(this.selectedArt.activeFlag === undefined){
      this.selectedArt.activeFlag = 1;
    }

    if(this.selectedArt.deleteFlag === undefined){
      this.selectedArt.deleteFlag = 0;
    }
    
    this.selectedArt = new Arts(
      (data['uuid'] ? data['uuid'] : ''),
      data['title'],
      data['artCategoryUuid'],
      data['shortDescreption'],
      data['longDescreption'],
      data['artLength'],
      data['width'],
      data['height'],
      data['category'],
      data['medium'],
      data['weight'],
      data['copyPrice'],
      data['price'],
      data['packageCharges'],
      data['discount'],
      1,
      data['sortOrder'],
      data['imageUrl'],
      this.selectedArt.image,
      data['imageUuid'],
      data['status'],
      (this.selectedArt.ref1 ? this.selectedArt.ref1 : ''),
      (this.selectedArt.ref2 ? this.selectedArt.ref2 : ''),
      (this.selectedArt.ref3 ? this.selectedArt.ref3 : ''),
      this.selectedArt.activeFlag,
      (this.selectedArt.createdBy ? this.selectedArt.createdBy : ''),
      data['createdDate'],
      (this.selectedArt.modifiedBy ? this.selectedArt.modifiedBy : ''),
      new Date(), 
      (this.selectedArt.deletedBy ? this.selectedArt.deletedBy : ''), 
      (this.selectedArt.deletedDate ? this.selectedArt.deletedDate : new Date()),
      this.selectedArt.deleteFlag
    );
  }
}
