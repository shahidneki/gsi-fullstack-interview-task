// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GeometryListComponent } from './geometry-list/geometry-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GeometryFormComponent } from './geometry-form/geometry-form.component';
import { GeometryMapComponent } from './geometry-map/geometry-map.component';
import { GeometryModalComponent } from './geometry-modal/geometry-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

const appRoutes: Routes = [
  { path: '', component: GeometryListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GeometryListComponent,
    // GeometryFormComponent,
    GeometryMapComponent,
    GeometryModalComponent,
  ],
  entryComponents: [
    GeometryModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
