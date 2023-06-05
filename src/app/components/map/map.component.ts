import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, MapOptions, tileLayer } from 'leaflet';

import { environment } from '@environment';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, LeafletModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  host: { class: 'flex flex-col flex-auto' },
})
export class MapComponent {
  mapOptions: MapOptions = {
    center: latLng(
      environment.map.options.center.latitude,
      environment.map.options.center.longitude
    ),
    layers: environment.map.options.layers.map((layer) => {
      return tileLayer(layer.urlTemplate, layer.options);
    }),
    zoom: environment.map.options.zoom,
  };
}
