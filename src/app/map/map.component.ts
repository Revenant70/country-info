import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  clickHandler(e: Event) {
    let fips: string | null = null;

    // Gets id from SVG path
    const id = e.target as HTMLElement;
    
    // GNI per capita
    const GNI = 'NY.GNP.PCAP.CD';

    const url = `https://api.worldbank.org/v2/country/${id.getAttribute(
      'id'
    )}?format=json`;

    fetch(url)
      .then((Response) => Response.json())
      .then((countryInfo) => {
        const countryName = countryInfo[1][0].name;
        const countryCapital = countryInfo[1][0].capitalCity;
        const countryRegion = countryInfo[1][0].region.value;
        const incomeLevel = countryInfo[1][0].incomeLevel.value;
        const long = countryInfo[1][0].longitude;
        const lat = countryInfo[1][0].latitude;

        console.log(countryName,
          countryCapital,
          countryRegion,
          incomeLevel,
          long,
          lat)

          const CountryNameHTML = document.getElementById('country-name') as HTMLInputElement
          CountryNameHTML.textContent = countryName

          const CountryCapHTML = document.getElementById('country-capital') as HTMLInputElement
          CountryCapHTML.textContent = countryCapital

          const countryRegHTML = document.getElementById('country-region') as HTMLInputElement
          countryRegHTML.textContent = countryRegion

          const incomeLevelHTML = document.getElementById('income-level') as HTMLInputElement
          incomeLevelHTML.textContent = incomeLevel

          const longHTML = document.getElementById('long') as HTMLInputElement
          longHTML.textContent = long

          const latHTML = document.getElementById('lat') as HTMLInputElement
          latHTML.textContent = lat
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }
}
