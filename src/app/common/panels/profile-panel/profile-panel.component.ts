import { Component, ViewChild, ElementRef } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-panel',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './profile-panel.component.html',
  styleUrl: './profile-panel.component.css',
})
export class ProfilePanelComponent {
  firstName: string;
  fullName: string;
  nic: string;
  age: string;
  sex: string;
  email: string;
  organization: string;
  sector: string;
  position: string;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.firstName = 'Pasindu';
    this.fullName = 'Wijamuni Durage Pasindu Kulathilaka';
    this.nic = '960015398v';
    this.age = '28';
    this.sex = 'Male';
    this.email = 'pasindu@hotmail.com';
    this.organization = 'Badulla MC';
    this.sector = 'Revenue';
    this.position = 'Revenue Inspector';
  }

  editProfilePic() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log('Selected file:', file);
      // Implement your file upload logic here
    }
  }
}
