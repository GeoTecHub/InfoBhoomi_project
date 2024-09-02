import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { MapComponent } from '../map/map/map.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, MapComponent, SidePanelComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
