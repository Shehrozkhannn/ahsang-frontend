import { bootstrapApplication } from '@angular/platform-browser';
import { InfiniteRowModelModule, ModuleRegistry, PaginationModule } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

ModuleRegistry.registerModules([ClientSideRowModelModule,PaginationModule,InfiniteRowModelModule ]);

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));