import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class MapComponent {
  constructor(private http: HttpClient) {}

  private CountryInfo: object = {};

  clickHandler(e: Event) {
    const rootUrl = 'https://api.worldbank.org/v2/country/';

    // Gets id from SVG path
    const id = e.target as HTMLElement;

    const url = `${rootUrl}${id.getAttribute('id')}?format=json`;

    return this.http.get(url).subscribe((data) => {
      this.CountryInfo = JSON.parse(JSON.stringify(data));
      this.showContent()
    });
  }

  showContent() {
    const countryName = Object.values(this.CountryInfo)[1][0].name;
    const countryCapital = Object.values(this.CountryInfo)[1][0].capitalCity;
    const countryRegion = Object.values(this.CountryInfo)[1][0].region.value;
    const incomeLevel = Object.values(this.CountryInfo)[1][0].incomeLevel.value;
    const long = Object.values(this.CountryInfo)[1][0].longitude;
    const lat = Object.values(this.CountryInfo)[1][0].latitude

    const CountryNameHTML = document.getElementById(
      'country-name'
    ) as HTMLInputElement;
    CountryNameHTML.textContent = countryName;

    const CountryCapHTML = document.getElementById(
      'country-capital'
    ) as HTMLInputElement;
    CountryCapHTML.textContent = countryCapital;

    const countryRegHTML = document.getElementById(
      'country-region'
    ) as HTMLInputElement;
    countryRegHTML.textContent = countryRegion;

    const incomeLevelHTML = document.getElementById(
      'income-level'
    ) as HTMLInputElement;
    incomeLevelHTML.textContent = incomeLevel;

    const longHTML = document.getElementById('long') as HTMLInputElement;
    longHTML.textContent = long;

    const latHTML = document.getElementById('lat') as HTMLInputElement;
    latHTML.textContent = lat;
  }
}
