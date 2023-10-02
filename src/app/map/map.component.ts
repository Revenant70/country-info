import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {


  clickHandler(e:Event){
    let fips: string | null = null;

    /*Gets if from SVG path*/
    const id = e.target as HTMLElement

    const baseUrl = 'https://api.worldbank.org/v2';

    const endPoint = `country/${id.getAttribute('id')}?format=json`;

    const url = `https://api.worldbank.org/v2/country/${id.getAttribute('id')}?format=json`

    fetch(url)
    .then(data=>{return data.json()})
    .then(res=>console.log(res))
    .catch(error => {
      console.error('Error', error)
    })


  }

  
}
