import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-nav-link-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './mobile-nav-link-list-item.component.html',
  styleUrls: ['./mobile-nav-link-list-item.component.css'],
})
export class MobileNavLinkListItemComponent {
  @Input() path: string;
  @Input() text: string;
  @Input() options?: { exact: boolean };
}
