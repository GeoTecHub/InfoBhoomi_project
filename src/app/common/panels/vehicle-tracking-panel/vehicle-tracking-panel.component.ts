import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

interface Vehicle {
  title: string;
  content: string;
}

@Component({
  selector: 'app-vehicle-tracking-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatListModule],
  templateUrl: './vehicle-tracking-panel.component.html',
  styleUrl: './vehicle-tracking-panel.component.css',
})
export class VehicleTrackingPanelComponent implements OnInit {
  vehicles: Vehicle[] = [
    {
      title: 'JCB NC-8810',
      content: 'This is the example content of notification 1.',
    },
    {
      title: 'Bowser LM-5512',
      content: 'This is the example content of notification 2.',
    },
    {
      title: 'Tipper LM-2752',
      content: 'This is the example content of notification 3.',
    },
    {
      title: 'Crew Cab KP-5001',
      content: 'This is the example content of notification 3.',
    },
    {
      title: 'Motor Gader LM-1228',
      content: 'This is the example content of notification 3.',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Vehicles:', this.vehicles);
  }
}
