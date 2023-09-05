import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import {
  ColDef,
  DataTypeDefinition,
  GridApi,
  GridReadyEvent,
  ValueFormatterLiteParams,
  ValueParserLiteParams,
} from 'ag-grid-community';
import 'ag-grid-enterprise';

import { ITreadData } from '@app/interfaces/datasets/ITreadData';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule, AgGridModule, HttpClientModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  host: { class: 'flex flex-col flex-auto' },
})
export class GridComponent {
  private gridApi: GridApi<ITreadData>;

  columnDefs: ColDef[] = [
    { field: 'id', cellDataType: 'text', headerName: 'Id' },
    {
      field: 'created_at',
      cellDataType: 'dateString',
      headerName: 'Created At',
    },
    { field: 'timestamp', cellDataType: 'dateString', headerName: 'Timestamp' },
    { field: 'lat', cellDataType: 'number', headerName: 'Latitude' },
    { field: 'lon', cellDataType: 'number', headerName: 'Longitude' },
    { field: 'quality', cellDataType: 'number', headerName: 'Quality' },
    { field: 'num_sats', cellDataType: 'number', headerName: 'No. Satellites' },
    { field: 'hdop', cellDataType: 'number', headerName: 'HDoP' },
    { field: 'alt', cellDataType: 'number', headerName: 'Altitude' },
    { field: 'undulation', cellDataType: 'number', headerName: 'Undulation' },
    { field: 'age', cellDataType: 'number', headerName: 'Age' },
    { field: '_source', cellDataType: 'text', headerName: 'Source File' },
  ];

  defaultColDef: ColDef = {
    filter: true,
    resizable: true,
    sortable: true,
  };

  // TODO: Fix dataString type definition. Timestamp is being rendered, but is not
  //  parsed correctly/filterable.
  dataTypeDefinitions: {
    [cellDataType: string]: DataTypeDefinition;
  } = {
    dateString: {
      baseDataType: 'dateString',
      extendsDataType: 'dateString',
      valueParser: (params: ValueParserLiteParams<ITreadData, string>) => {
        return params.newValue != null &&
          params.newValue.match(
            '(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})(\\.\\d+)?(\\+\\d{2}:\\d{2})?'
          )
          ? params.newValue
          : null;
      },
      valueFormatter: (
        params: ValueFormatterLiteParams<ITreadData, string>
      ) => {
        return params.value == null ? '' : params.value;
      },
      dataTypeMatcher: (value: any) => {
        return (
          typeof value === 'string' &&
          !!value.match(
            '(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})(\\.\\d+)?(\\+\\d{2}:\\d{2})?'
          )
        );
      },
      dateParser: (value: string | undefined) => {
        if (value == null || value === '') {
          return undefined;
        }
        // TODO: Maybe check format to confirm ISO 8601 compliance and return null
        //  if not correct.
        return new Date(value);
      },
      dateFormatter: (value: Date | undefined) => {
        if (value == null) {
          return undefined;
        }
        const date = String(value.getDate());
        const month = String(value.getMonth() + 1);
        return `${date.length === 1 ? '0' + date : date}/${
          month.length === 1 ? '0' + month : month
        }/${value.getFullYear()}`;
      },
    },
  };

  rowData: any[] = [];

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<ITreadData>) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();

    // TODO: Move this to a component.
    this.http
      .get<{ data: ITreadData[] }>('/assets/mock/data.json')
      .subscribe((resp) => {
        this.rowData = resp.data;
      });
  }
}
