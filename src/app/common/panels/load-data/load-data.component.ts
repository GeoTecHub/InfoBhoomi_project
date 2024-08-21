import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';

interface ImportItem {
  data_id: string;
  data_name: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-load-data',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatDialogModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatInputModule,
    MatTableModule,
    MatIconButton,
    MatButtonModule,
  ],
  templateUrl: './load-data.component.html',
  styleUrl: './load-data.component.css',
})
export class LoadDataComponent {
  importItems: ImportItem[] = [
    {
      data_id: '1552',
      data_name: 'Road data',
      date: '05/05/2024',
      time: '10:24',
    },
    {
      data_id: '1542',
      data_name: 'Boundary data',
      date: '10/05/2024',
      time: '15:24',
    },
    {
      data_id: '1752',
      data_name: 'Date set name',
      date: '05/06/2024',
      time: '08:24',
    },
  ];

  displayColumns: string[] = ['ID', 'Name', 'Date', 'Time'];
  dataSource = this.importItems;
}
