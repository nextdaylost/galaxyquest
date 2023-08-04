export interface GeoPoint {
  format: string;
  utc: Date;
  lat: number;
  lon: number;
  quality: number;
  num_sats: number;
  hdop: number;
  alt: number;
  a_units: string;
  undulation: number;
  u_units: string;
  age: number;
  station_id: string;
}
