import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

import { GeoPoint } from '@app/interfaces/geopoint';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule, HttpClientModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  private gridApi: GridApi<GeoPoint>;

  columnDefs: ColDef[] = [
    { field: 'format', cellDataType: 'text', headerName: 'Log Format' },
    { field: 'utc', cellDataType: 'text', headerName: 'Timestamp' },
    { field: 'lat', cellDataType: 'number', headerName: 'Latitude' },
    { field: 'lon', cellDataType: 'number', headerName: 'Longitude' },
    { field: 'quality', cellDataType: 'number', headerName: 'Quality' },
    { field: 'num_sats', cellDataType: 'number', headerName: 'Satellites' },
    { field: 'hdop', cellDataType: 'number', headerName: 'HDoP' },
    { field: 'alt', cellDataType: 'number', headerName: 'Altitude' },
    { field: 'a_units', cellDataType: 'text', headerName: 'Alt. Units' },
    { field: 'undulation', cellDataType: 'number', headerName: 'Undulation' },
    { field: 'u_units', cellDataType: 'text', headerName: 'Und. Units' },
    { field: 'age', cellDataType: 'number', headerName: 'Age' },
    { field: 'station_id', cellDataType: 'text', headerName: 'Station Id' },
  ];

  defaultColDef: ColDef = {
    filter: true,
    resizable: true,
    sortable: true,
  };

  rowData: any[] = [];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<GeoPoint>) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit({
      defaultMinWidth: 100,
      columnLimits: [
        { key: 'format', minWidth: 130 },
        { key: 'utc', minWidth: 200 },
        { key: 'lat', minWidth: 120 },
        { key: 'lon', minWidth: 120 },
        { key: 'num_sats', minWidth: 120 },
        { key: 'alt', minWidth: 120 },
        { key: 'a_units', minWidth: 120 },
        { key: 'undulation', minWidth: 130 },
        { key: 'u_units', minWidth: 120 },
        { key: 'station_id', minWidth: 120 },
      ],
    });

    // TODO: Move this to a component.
    this.http
      .get<{ data: GeoPoint[] }>('/assets/mock/data.json')
      .subscribe((resp) => {
        this.rowData = resp.data;
      });
  }
}
