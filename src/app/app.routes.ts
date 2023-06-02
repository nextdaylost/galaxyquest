import { Routes } from '@angular/router';

import { GridComponent } from '@app/components/grid/grid.component';
import { HomeComponent } from '@app/components/home/home.component';
import { MapComponent } from '@app/components/map/map.component';
import { StackedLayoutComponent } from '@app/layouts/stacked-layout/stacked-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: StackedLayoutComponent,
    children: [
      { path: 'grid', component: GridComponent },
      { path: 'home', component: HomeComponent },
      { path: 'map', component: MapComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];
