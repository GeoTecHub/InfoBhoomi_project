import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import { Geometry } from 'ol/geom';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { OpenLayerService } from '../../openLayerServices/open-layer.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { ViewInquiryPanelPopupComponent } from '../../common/panels/view-inquiry-panel/view-inquiry-panel-popup.component';
import { AddInquiryPanelPopupComponent } from '../../common/panels/add-inquiry-panel/add-inquiry-panel-popup.component';
import { ReminderPanelPopupComponent } from '../../common/panels/add-reminder-panel/reminder-panel-popup.component';
import { ReminderVPanelPopupComponent } from '../../common/panels/view-reminder-panel/reminder-v-panel-popup.component';
import { TagPanelPopupComponent } from '../../common/panels/add-tag-panel/tag-panel-popup.component';
import { NotificationPanelComponent } from '../../common/panels/notification-panel/notification-panel.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapElementRef!: ElementRef;

  constructor(
    private openLayerService: OpenLayerService,
    public dialog: MatDialog
  ) {}

  // !--------------------------------
  opentagPanelPopup() {
    const dialogRef = this.dialog.open(TagPanelPopupComponent, {
      minWidth: '600px',
      maxWidth: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // !--------------------------------
  openReminderPanelPopup() {
    const dialogRef = this.dialog.open(ReminderPanelPopupComponent, {
      minWidth: '600px',
      maxWidth: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // !-------------------------------
  openReminderViewPanelPopup() {
    const dialogRef = this.dialog.open(ReminderVPanelPopupComponent, {
      minWidth: '600px',
      maxWidth: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // !-------------------------------
  addInqueryPanelPopup() {
    const dialogRef = this.dialog.open(AddInquiryPanelPopupComponent, {
      minWidth: '600px',
      maxWidth: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // !-------------------------------
  ViewInqueryPanelPopup() {
    const dialogRef = this.dialog.open(ViewInquiryPanelPopupComponent, {
      minWidth: '600px',
      maxWidth: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // !-------------------------------
  OpenNotificationPanel() {
    const dialogRef = this.dialog.open(NotificationPanelComponent, {
      width: '250px',
      position: { top: '50px', right: '50px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  // !-------------------------------

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
