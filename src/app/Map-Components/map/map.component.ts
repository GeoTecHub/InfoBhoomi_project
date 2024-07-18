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

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapElementRef!: ElementRef;

  constructor(private openLayerService: OpenLayerService) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.openLayerService.initializeMap(this.mapElementRef.nativeElement);
    this.openLayerService.createMousePositionControl();
    this.openLayerService.addselectionInteraction();
  }
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

        this.openLayerService.addLayer(vectorLayer); // this where the feature is adding to the selected layer
      }
    );
  }

  onProjectionChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const projectionId = selectElement.value;
    this.openLayerService.viewProjectionChange(projectionId);
  }
}
