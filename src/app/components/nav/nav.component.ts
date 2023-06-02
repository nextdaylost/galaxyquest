import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileNavComponent } from '@app/components/mobile-nav/mobile-nav.component';
import { NavLinkListComponent } from '@app/components/nav-link-list/nav-link-list.component';
import { MobileNavMenuButtonComponent } from '@app/components/mobile-nav-menu-button/mobile-nav-menu-button.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MobileNavComponent,
    NavLinkListComponent,
    MobileNavMenuButtonComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {}
