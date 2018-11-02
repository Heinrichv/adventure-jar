import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {
  @Input() place;
  hover = false;
  constructor() { }

  enter() {
    this.hover = true;
  }

  leave() {
    window.setTimeout(() => this.hover = false, 300);
  }
}
