import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { PostsService } from '../../core/services/posts.service';
import { CommonModule } from '@angular/common';
import {
  GridReadyEvent,
  IDatasource,
  IGetRowsParams,
  RowModelType
} from 'ag-grid-community';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  columnDefs = [
    { headerName: 'Title', field: 'title' },
    {
      headerName: 'Excerpt',
      field: 'body',
      valueGetter: (params: any) => params.data?.body?.slice(0, 200)
    },
    {
      headerName: 'Author',
      field: 'author',
      valueGetter: (params: any) => params.data?.author?.username || 'N/A'
    },
    { headerName: 'Published Date', field: 'createdAt' }
  ];

  defaultColDef = { flex: 1, resizable: true };
  rowModelType: RowModelType = 'infinite';
  cacheBlockSize = 5;

  constructor(private postService: PostsService) {}

  onGridReady(params: any) {
    const dataSource: IDatasource = {
      getRows: (gridParams: IGetRowsParams) => {
        const page = Math.floor(gridParams.startRow / this.cacheBlockSize) + 1;

        this.postService.getPosts(page).subscribe(
          (res: any) => {
            gridParams.successCallback(res.items, res.total);
          },
          (err) => {
            gridParams.failCallback();
          }
        );
      }
    };

    // ✅ No need to bind `[datasource]` in HTML, set it here directly
    params.api.setGridOption('datasource', dataSource);;
  }
}
