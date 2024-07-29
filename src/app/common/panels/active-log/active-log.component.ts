import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

export interface PeriodicElement {
  action_id: number;
  action: string;
  description: string;
  time: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    action_id: 1,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 2,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 3,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 4,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 5,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 6,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 7,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 8,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 9,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
  {
    action_id: 10,
    action: 'Title of action',
    description: 'short description',
    time: '11:10',
    date: '2024/07/10',
  },
];

@Component({
  selector: 'app-active-log',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './active-log.component.html',
  styleUrl: './active-log.component.css',
})
export class ActiveLogComponent {
  closePopup() {
    // Logic to close the popup
  }

  displayedColumns: string[] = [
    'action_id',
    'action',
    'description',
    'time',
    'date',
  ];
  dataSource = ELEMENT_DATA;
}
