import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { OpenLayerService } from '../../openLayerServices/open-layer.service';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import { Geometry } from 'ol/geom';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { PrintComponent } from '../../common/panels/print/print.component';
import { ExportDataComponent } from '../../common/panels/export-data/export-data.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatMenuModule,MatIconModule, MatButtonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapElementRef!: ElementRef;
  sidebarOpen = false;

  constructor(
    private openLayerService: OpenLayerService,
    public dialog: MatDialog
  ) {}
  
  //Function to open the sidebar of map component interface (button id="toggle-sidebar-button")
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  //Function for opening the Print component
  OpenPrintData() {
    const dialogRef = this.dialog.open(PrintComponent, {
      minWidth: '600px',
      maxWidth: '800px',
      position: { left: '80px' },
      
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Function for opening the ExportData component
  OpenExporttData() {
    const dialogRef = this.dialog.open(ExportDataComponent, {
      minWidth: '600px',
      maxWidth: '800px',
      position: { left: '80px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.openLayerService.initializeMap(this.mapElementRef.nativeElement);
    this.openLayerService.createMousePositionControl();
    this.openLayerService.addselectionInteraction();
  };
  setDrawingType(type: 'Point' | 'LineString' | 'Polygon'): void {
    // if (this.parentSelectedLayer!) { // where does this comes from??
      this.openLayerService.addDrawingInteraction(
        type,
        (drawnFeature: Feature<Geometry>) => {
          // Here, you handle the drawnFeature. For example:
          console.log('A feature was drawn:', drawnFeature);

          const vectorSource = new VectorSource({
            features: [drawnFeature],
          });

          const vectorLayer = new VectorLayer({
            source: vectorSource,
          });

          this.openLayerService.addLayer(vectorLayer) // this where the feature is adding to the selected layer
        }
      );
    
  }


  onProjectionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const projectionId = selectElement.value;
    this.openLayerService.viewProjectionChange(projectionId);
  }

}
