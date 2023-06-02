import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-link-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-link-list-item.component.html',
  styleUrls: ['./nav-link-list-item.component.css'],
  host: { class: 'inline-flex' },
})
export class NavLinkListItemComponent {
  @Input() path: string;
  @Input() text: string;
  @Input() options?: { exact: boolean };
}
