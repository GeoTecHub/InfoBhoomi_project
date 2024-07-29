import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

interface Notification {
  n_type: string;
  type: string;
  icon: string;
  n_id: string;
  property_id: string;
  title: string;
  content: string;
  timestamp: string; // or Date object
  isActive: boolean;
}

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css'],
})
export class NotificationPanelComponent implements OnInit {
  notifications: Notification[] = [
    {
      n_type: 'Reminder',
      type: 'Notification Type',
      icon: 'notifications',
      n_id: 'AH34563',
      property_id: '56783',
      title: 'Title of the notification',
      content: 'This is the example content of notification 1.',
      timestamp: '15 hours ago',
      isActive: true,
    },
    {
      n_type: 'Inquiry',
      type: 'Notification Type',
      n_id: 'AH34589',
      icon: 'mode_comment',
      property_id: '56735',
      title: 'Title of the notification',
      content: 'This is the example content of notification 2.',
      timestamp: '2 days ago',
      isActive: true,
    },
    {
      n_type: 'Inquiry',
      type: 'Notification Type',
      n_id: 'AH34567',
      icon: 'mode_comment',
      property_id: '56737',
      title: 'Title of the notification',
      content: 'This is the example content of notification 3.',
      timestamp: '5 days ago',
      isActive: true,
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Notifications:', this.notifications);
  }
}
