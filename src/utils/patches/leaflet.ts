import { Icon } from 'leaflet';

export function fixMarker() {
  Icon.Default.prototype.options.shadowUrl =
    'assets/leaflet/images/marker-shadow.png';
  Icon.Default.prototype.options.iconUrl =
    'assets/leaflet/images/marker-icon.png';
  Icon.Default.prototype.options.iconRetinaUrl =
    'assets/leaflet/images/marker-icon-2x.png';
}
