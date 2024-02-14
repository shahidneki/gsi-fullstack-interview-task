// geometry-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GeometryService } from '../geometry.service';

@Component({
  selector: 'app-geometry-modal',
  templateUrl: './geometry-modal.component.html',
  styleUrls: ['./geometry-modal.component.scss']
})
export class GeometryModalComponent {
  geometryForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<GeometryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private geometryService: GeometryService
  ) {
    this.geometryForm = this.fb.group({
      id: [data.geometry.id],
      address: [data.geometry.address],
      city: [data.geometry.city],
      country: [data.geometry.country],
      roof_material: [data.geometry.roof_material],
      roof_type: [data.geometry.roof_type],
      area: [data.geometry.area],
      storeys: [data.geometry.storeys],
      height: [data.geometry.height],
    });
  }

  /**
   * Delete the geometry.
   */
  deleteGeometry(): void {
    //TODO: Need to implement delete geometry
    // Should call a method on the geometry service
    this.dialogRef.close('delete');
  }

  /**
   * Update the geometry.
   */
  async updateGeometry(): Promise<void> {
    const updatedGeometry = this.geometryForm.value;
    const response = await this.geometryService.updateGeometry(updatedGeometry.id, updatedGeometry);

    if (response) {
      console.log('Geometry updated successfully:', response);
      // TODO: Add a toast with a message that displays the Id and a successful update message
    } else {
      // TODO: Add a toast with an error message
    }

    this.dialogRef.close(updatedGeometry);
  }
}