import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '@app/components/nav/nav.component';

@Component({
  selector: 'app-stacked-layout',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './stacked-layout.component.html',
  styleUrls: ['./stacked-layout.component.css'],
})
export class StackedLayoutComponent {}
