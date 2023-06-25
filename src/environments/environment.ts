export const environment = {
  appInfo: {
    support: {
      email: 'contact@nextdaylost.com',
      name: 'Galaxy Quest Support',
    },
  },
  map: {
    options: {
      center: {
        latitude: 46.776602,
        longitude: 33.370754,
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
      zoom: 10,
    },
  },
};
