// @ts-ignore
import pkg from '@package';

export const environment = {
  appInfo: {
    support: pkg.author,
  },
  map: {
    options: {
      center: {
        latitude: 38.9072,
        longitude: -77.0369,
      },
      layers: [
        {
          urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          options: {
            attribution: 'OpenStreetMap',
            maxZoom: 18,
            minZoom: 5,
          },
        },
      ],
      zoom: 12,
    },
  },
};
