import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-tab-1',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatListModule, MatRippleModule],
  templateUrl: './tab-1.component.html',
  styleUrl: './tab-1.component.css',
})
export class Tab1Component {}
