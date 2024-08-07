import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-export-data',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule,MatDialogModule,  MatSelectModule , MatIconModule, MatButtonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './export-data.component.html',
  styleUrl: './export-data.component.css'
})
export class ExportDataComponent {
  layer_types = new FormControl('');
  layer_typeList: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

}
