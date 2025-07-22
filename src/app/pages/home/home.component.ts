import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-home',
  imports: [AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  columnDefs = [
    { field: 'title' },
    { field: 'excerpt' },
    { field: 'author' },
    { field: 'publishedAt' }
  ];

  rowData: any[] = [];
}
