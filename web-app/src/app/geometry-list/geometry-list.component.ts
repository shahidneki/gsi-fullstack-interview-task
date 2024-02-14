// geometry-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeometryModalComponent } from '../geometry-modal/geometry-modal.component';
import { GeometryService } from '../geometry.service';

@Component({
  selector: 'app-geometry-list',
  templateUrl: './geometry-list.component.html',
  styleUrls: ['./geometry-list.component.scss']
})
export class GeometryListComponent implements OnInit {
  geometries: any[] = [];

  constructor(private dialog: MatDialog, private geometryService: GeometryService) {}

  /**
   * Initialize the component.
   */
  async ngOnInit(): Promise<void> {
    await this.loadGeometries();
  }

  /**
   * Load geometries.
   */
  async loadGeometries(): Promise<void> {
    this.geometries = await this.geometryService.getAllGeometries();
  }

  /**
   * Open the geometry modal.
   * @param geometry The geometry data.
   */
  openGeometryModal(geometry: any): void {
    const dialogRef = this.dialog.open(GeometryModalComponent, {
      width: '400px',
      data: { geometry: geometry }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Add error handling
      console.log('The dialog was closed', result);
    });
  }
}