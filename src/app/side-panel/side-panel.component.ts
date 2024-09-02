import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab1Component } from './tab-1/tab-1.component';
import { Tab2Component } from './tab-2/tab-2.component';
import { Tab3Component } from './tab-3/tab-3.component';
import { Tab4Component } from './tab-4/tab-4.component';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  imports: [
    Tab1Component,
    Tab2Component,
    Tab3Component,
    CommonModule,
    Tab4Component,
  ],
})
export class SidePanelComponent {
  activeTab: number = 1;

  selectTab(tabIndex: number) {
    this.activeTab = tabIndex;
  }
}
