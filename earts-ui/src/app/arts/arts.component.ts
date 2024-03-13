import { Component } from '@angular/core'; 
import { ArtDetailsComponent } from './art-details/art-details.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ArtsService } from './arts.service';
import { Arts } from './arts.model';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-arts',
  standalone: true,
  imports: [ ArtDetailsComponent, RouterModule, TableModule, CommonModule],
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.css'
})
export class ArtsComponent { 
  arts: Arts[] = []; 
  isFetching: boolean = false;

  constructor(private artsService: ArtsService, private route: ActivatedRoute, private router: Router) {
      console.log('In Parent Constructor');
  }

  ngOnInit() {
    console.log('In Parent Init');
    this.artsService.artSubscriptions.push(
      this.artsService.artsUpdated.subscribe((arts: Arts[]) => {
        console.log('In Parent - artsUpdated Got fresh arts');
        this.arts = arts;
      }));
    this.fetchArts();
  }

  fetchArts() {
    this.artsService.artSubscriptions.push(
      this.artsService.getArts().subscribe((arts: Arts[]) => {
        this.arts = arts;
        // Inserting Data into Arts Map
        // const artsMap: { [key: string]: Art } = {};
        // arts.forEach(art => {
        //   artsMap[art.uuid] = art;
        // });
        // this.depatmentsService.artsMap = artsMap;
      }));
  }

  onArtSelect(art: Arts) {
    this.artsService.selectedArt = art;
    // Send the selected art to Edit Component
    // this.router.navigate([this.selectedArt.uuid], { relativeTo: this.route});
  }
 

  ngOnDestroy(): void {
    this.artsService.desposeSubscriptions();
  }
}
