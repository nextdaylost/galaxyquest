import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import {
  Control,
  DrawEvents,
  featureGroup,
  FeatureGroup,
  latLng,
  MapOptions,
  tileLayer,
} from 'leaflet';

import { environment } from '@environment';
import * as LeafletPatches from '@utils/patches/leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, LeafletDrawModule, LeafletModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  host: { class: 'flex flex-col flex-auto' },
})
export class MapComponent {
  drawLayer: FeatureGroup = featureGroup();

  drawOptions: Control.DrawConstructorOptions = {
    edit: {
      featureGroup: this.drawLayer,
    },
  };

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

  constructor() {
    LeafletPatches.fixMarker();
  }

  onDrawCreated($event: DrawEvents.Created) {
    this.drawLayer.addLayer($event.layer);
  }
}
