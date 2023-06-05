import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileNavLinkListItemComponent } from '@app/components/mobile-nav-link-list-item/mobile-nav-link-list-item.component';

@Component({
  selector: 'app-mobile-nav-link-list',
  standalone: true,
  imports: [CommonModule, MobileNavLinkListItemComponent],
  templateUrl: './mobile-nav-link-list.component.html',
  styleUrls: ['./mobile-nav-link-list.component.css'],
})
export class MobileNavLinkListComponent {}
