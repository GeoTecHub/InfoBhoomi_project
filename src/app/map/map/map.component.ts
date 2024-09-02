import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import 'ol/ol.css';
import { ToolsComponent } from '../tools/tools.component';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  imports: [ToolsComponent],
})
export class MapComponent implements OnInit {
  map!: Map;

  ngOnInit(): void {
    this.map = new Map({
      target: 'map', // The id of the element in the template
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap as the tile source
        }),
      ],
      view: new View({
        center: [0, 0], // Coordinates in EPSG:3857
        zoom: 2, // Initial zoom level
      }),
    });
  }
}
