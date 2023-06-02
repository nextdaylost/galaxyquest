import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavLinkListItemComponent } from '@app/components/nav-link-list-item/nav-link-list-item.component';

@Component({
  selector: 'app-nav-link-list',
  standalone: true,
  imports: [CommonModule, NavLinkListItemComponent],
  templateUrl: './nav-link-list.component.html',
  styleUrls: ['./nav-link-list.component.css'],
  host: { class: 'sm:flex' },
})
export class NavLinkListComponent {}
