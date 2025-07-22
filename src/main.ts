import { bootstrapApplication } from '@angular/platform-browser';
import { ModuleRegistry, PaginationModule } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

ModuleRegistry.registerModules([ClientSideRowModelModule,PaginationModule ]);

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));