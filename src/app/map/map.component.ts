import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {

  clickHandler(e:Event){

    /*Gets if from SVG path*/
    const id = e.target as HTMLElement
    console.log(id.getAttribute('id'))

  }

  
}
