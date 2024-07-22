import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.css',
})
export class NotificationPanelComponent implements OnInit {
  notifications: string[] = [
    'Notification 1',
    'Notification 2',
    'Notification 3',
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Notifications:', this.notifications); // Add this line for debugging
    this.cdr.detectChanges();
  }
}
