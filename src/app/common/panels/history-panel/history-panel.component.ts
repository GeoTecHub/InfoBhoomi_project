import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

interface Item {
  title: string;
  content: string;
}

@Component({
  selector: 'app-history-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatListModule],
  templateUrl: './history-panel.component.html',
  styleUrl: './history-panel.component.css',
})
export class HistoryPanelComponent implements OnInit {
  items: Item[] = [
    {
      title: 'Administrative Information',
      content: 'This is the example content of notification 1.',
    },
    {
      title: 'Property Overview',
      content: 'This is the example content of notification 2.',
    },
    {
      title: 'Utility Information',
      content: 'This is the example content of notification 3.',
    },
    {
      title: 'Land Tenure',
      content: 'This is the example content of notification 3.',
    },
    {
      title: 'Residents Information',
      content: 'This is the example content of notification 3.',
    },
    {
      title: 'Assesment and Tax Information',
      content: 'This is the example content of notification 3.',
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Items:', this.items);
  }
}
