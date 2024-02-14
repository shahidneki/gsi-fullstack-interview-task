// geometry.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {
  private apiBaseUrl = 'http://localhost:3000';
  private geometries: any[] = [];

  constructor(private http: HttpClient) {}

  //TODO: Hardcoded URLs need to be declared in a config file
  
  /**
   * Load buildings data from the GeoJSON file.
   */
  // TODO: Need to obtain data from the API endpoint instead:
  // return this.http.get<any>('http://localhost:3000/api/buildings')
  async loadBuildingsData(): Promise<any[]> {
    try {
      const data = await this.http.get('assets/buildings.geojson').toPromise();
      return (data as any).features.map((feature: any) => ({
        id: feature.properties.geom_id,
        address: feature.properties.address,
        city: feature.properties.city,
        country: feature.properties.country,
        type: feature.properties.type,
        roof_material: feature.properties.roof_material,
        roof_type: feature.properties.roof_type,
        area: feature.properties.area,
        storeys: feature.properties.storeys,
        height: feature.properties.height
      }));
    } catch (error) {
      console.error('Error loading buildings data:', error);
      return [];
    }
  }

  /**
   * Get all geometries. If geometries are not loaded, load them.
   */
  async getAllGeometries(): Promise<any[]> {
    if (this.geometries.length === 0) {
      return await this.loadBuildingsData();
    } else {
      return this.geometries;
    }
  }

  /**
   * Add a new geometry.
   * @param geometry The geometry to add.
   */
  async addGeometry(geometry: any): Promise<any> {
    // Implement a POST request to add a new building record
    this.geometries.push(geometry);
    return geometry;
  }

  /**
   * Update an existing geometry.
   * @param id The ID of the geometry to update.
   * @param updatedGeometry The updated geometry data.
   */
  async updateGeometry(id: string, updatedGeometry: any): Promise<any | undefined> {
    const apiUrl = `${this.apiBaseUrl}/api/buildings/${id}`;
    try {
      const response = await this.http.put<any>(apiUrl, updatedGeometry).toPromise();
      return response;
    } catch (error) {
      console.error('Error updating geometry:', error);
      return undefined;
    }
  }
}
