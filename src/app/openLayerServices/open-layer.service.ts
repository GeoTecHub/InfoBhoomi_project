import { Injectable } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Draw, Interaction, Select, Translate, Snap } from 'ol/interaction';
import Feature from 'ol/Feature';
import { Geometry, LineString, Polygon } from 'ol/geom';
import { click } from 'ol/events/condition';
import proj4 from 'proj4';
import { get as getProjection, transform } from 'ol/proj.js';
import MousePosition from 'ol/control/MousePosition.js';
import { createStringXY } from 'ol/coordinate.js';
import { register } from 'ol/proj/proj4';
import { CutPolygonService } from './cut-polygon.service';
import { Fill, Circle, Stroke, Style } from 'ol/style.js';

@Injectable({
  providedIn: 'root',
})
export class OpenLayerService {
  //?Define the parameters for the OpenLayerService
  private map!: Map;
  private vectorSource = new VectorSource<Feature<Geometry>>(); // this initalization is critical
  private drawInteraction: Draw | null = null;
  private currentDrawType: 'Point' | 'LineString' | 'Polygon' | null = null;
  private selectionInteraction!: Select | null;
  private selectedFeature: Feature<Geometry> | null = null;
  private snapInteraction: Snap | null = null;
  private splitPloy: Polygon | null = null;
  private splitLine: LineString | null = null;
 
  constructor() {
    this.registerProjections();
  }

  private registerProjections() {
    proj4.defs(
      'EPSG:27700',
      '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 ' +
        '+x_0=400000 +y_0=-100000 +ellps=airy ' +
        '+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 ' +
        '+units=m +no_defs'
    );

    proj4.defs(
      'EPSG:23032',
      '+proj=utm +zone=32 +ellps=intl ' +
        '+towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs'
    );

    proj4.defs(
      'EPSG:5235',
      '+proj=tmerc +lat_0=7.00047152777778 +lon_0=80.7717130833333 + k=0.9999238418 +x_0=500000 +y_0=500000 +a=6377276.3450 +b=6356075.4131 +towgs84=-0.2933,766.9499,87.7131,0.0000009488,0.00000821792,3.4730161,0.000000039338 +units=m +no_defs +type=crs'
    );

    register(proj4);

    const proj27700 = getProjection('EPSG:27700');
    if (proj27700) {
      proj27700.setExtent([-650000, -150000, 1350000, 1450000]);
    } else {
      console.error(' Projection EPSG:2700 is not available');
    }

    const proj23032 = getProjection('EPSG:23032');
    if (proj23032) {
      proj23032.setExtent([-1206118.71, 4021309.92, 1295389.0, 8051813.28]);
    } else {
      console.error(' Projection EPSG:23032 is not available');
    }

    const proj5235 = getProjection('EPSG:5235');
    if (proj5235) {
      // proj5235.setExtent([ 818630.19, 373847.32, 374653.87, 630460.79]);
    } else {
      console.error(' Projection EPSG:5235 is not available');
    }
  }

  initializeMap(mapElement: HTMLElement): void {
    this.map = new Map({
      target: mapElement,

      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],

      view: new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
  //$ Add Layers
  addLayer(layer: VectorLayer<Feature<Geometry>>): void {
    this.map.addLayer(layer);
  }

  //$ fucntion: for toggling the snap
  public toggleSnapInteraction(enable?: boolean): void {
    if (!enable == undefined) {
      // if the toggleSnapInteraction is defeined
      if (enable == true) {
        if (!this.snapInteraction) {
          this.snapInteraction = new Snap({
            source: this.vectorSource,
            pixelTolerance: 10,
          });
          this.map.addInteraction(this.snapInteraction);
        }
      } else if (enable == false) {
        if (this.snapInteraction) {
          this.map.removeInteraction(this.snapInteraction);
          this.snapInteraction = null;
        }
      }
    } else if (enable == undefined) {
      // if the toggleSnapInteraction is undefedeined
      if (this.snapInteraction) {
        this.map.removeInteraction(this.snapInteraction);
        this.snapInteraction = null;
      } else if (!this.snapInteraction) {
        this.snapInteraction = new Snap({
          source: this.vectorSource,
          pixelTolerance: 10,
        });
        this.map.addInteraction(this.snapInteraction);
      }
    }
  }

  //$ Function: AddSelection Interaction
  public addselectionInteraction(): void {
    this.setCursorForMode('select');
    this.selectionInteraction = new Select({
      condition: click,
    });

    this.map.addInteraction(this.selectionInteraction);
    this.selectionInteraction.on('select', (e) => {
      if (e.selected.length > 0) {
        this.selectedFeature = e.selected[0]; // Initiate the splitting process
      } else {
        this.selectedFeature = null;
      }
    });
  }

  //$ Fucntion: methode to add drawing interaction

  public addDrawingInteraction(
    drawType: 'Point' | 'LineString' | 'Polygon',
    onDrawEnd: (feature: Feature) => void
  ): void {
    // to check whether there is a drawing interaction active and if the same type

    if (this.drawInteraction) {
      this.map.removeInteraction(this.drawInteraction);
      this.drawInteraction = null;
      this.currentDrawType = null;
    }

    this.setCursorForMode('draw');

    this.drawInteraction = new Draw({
      source: this.vectorSource,
      type: drawType,
    });

    // add the interaction into the map
    this.map.addInteraction(this.drawInteraction);

    //set the current drawtype to newly requested event
    this.currentDrawType = drawType;

    //handdle the drawned event
    this.drawInteraction.on('drawend', (event) => {
      const drawnFeature = event.feature;
      console.log('Drawn feature:', drawnFeature); // Debug log
      // this.vectorSource.addFeature(drawnFeature); // Ensure the feature is added to the source
      onDrawEnd(drawnFeature); //
    });
  }

  //$ Fucntion: methode to use translate interaciton

  public addTranslateInteraction(): void {
    const translateInteraction = new Translate({});
    this.map.addInteraction(translateInteraction);
  }

  //$ Function remove all the interactions

  public removeAllInteractions(): void {
    this.map.getInteractions().forEach((interation) => {
      this.map.removeInteraction(interation);
    });
  }

  //$ Function: delete Fetures
  public deleteSelectedFeatures(): void {
    // access the features before removing them
    this.addselectionInteraction();
    if (this.selectionInteraction) {
      const features = this.selectionInteraction.getFeatures().getArray();

      // remove all the interactions
      features.forEach((feature) => {
        this.vectorSource.removeFeature(feature);
      });
    }
  }

  //$ Function creating the projections
  public viewProjectionChange(projectionID: string): void {
    const newProj = getProjection(projectionID);
    if (!newProj) {
      console.error('Projection Not Found', projectionID);
      return;
    }
    const currentView = this.map.getView();
    const currentCenter = currentView.getCenter();
    const currentZoom = currentView.getZoom();
    if (currentCenter) {
      const newCenter = transform(
        currentCenter,
        currentView.getProjection().getCode(),
        newProj.getCode()
      );

      const newProjectExrent = newProj.getExtent();
      const newView = new View({
        projection: newProj,
        center: newCenter,
        zoom: 0,
        extent: newProjectExrent || undefined,
      });
      this.map.setView(newView);
    } else {
      console.error('No center found');
    }
  }
  //$ Function: display the map cooridinates:
  createMousePositionControl(): void {
    const currentView = this.map.getView();
    const proj = currentView.getProjection();
    //ensure the projection is availale
    // const proj5235 = getProjection('EPSG:5235');
    if (proj) {
      const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: proj,
      });
      this.map.addControl(mousePositionControl);
    } else {
      console.error('Projection EPSG:5235 is not available');
    }
  }

  //$ Function: Deactivation the selection:
  public deactivateSelection(): void {
    this.map.getInteractions().forEach((interaction) => {
      if (interaction instanceof Select) {
        interaction.setActive(false); // Disable the select interaction
      }
    });

    // Change the cursor style back to default
    const mapElement = this.map.getTargetElement();
    mapElement.style.cursor = 'auto';

    // Optionally clear selection instructions or UI hints
    console.log('Selection completed.');
  }

  //$ Function: Set the cursor style
  setCursorForMode(mode: string): void {
    const mapElement = this.map.getTargetElement();

    switch (mode) {
      case 'select':
        mapElement.style.cursor = 'pointer'; // Hand pointer for selection mode
        break;
      case 'draw':
        mapElement.style.cursor = 'pointer'; // Crosshair for drawing mode
        break;
      case 'move':
        mapElement.style.cursor = 'move'; // Move cursor for dragging mode
        break;
      default:
        mapElement.style.cursor = 'default'; // Default arrow cursor for normal mode
        break;
    }
  }
}
