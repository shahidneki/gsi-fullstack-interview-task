import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-geometry-map',
  templateUrl: './geometry-map.component.html',
  styleUrls: ['./geometry-map.component.scss']
})
export class GeometryMapComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const map = new Map({
      target: this.mapElement.nativeElement,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center:
        [
          0,0
        ],
        zoom: 4
      })
    });

    // TODO: Fetch GeoJSON file from assets
    this.httpClient.get('../../assets/buildings.geojson').subscribe((geoJsonData: any) => {
      console.log("Testing festing the geoJSON file");
    });
  }
}
