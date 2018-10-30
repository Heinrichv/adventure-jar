import { Component, OnInit } from '@angular/core';

const fiftyonedegrees = require('fiftyonedegreescore');
const config = {
  'dataFile' : require('fiftyonedegreeslitepattern'),
  'properties' : 'BrowserName,ScreenPixelsWidth'
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isMobile: boolean;

  ngOnInit(): void {
    this.setDevice();
  }

  setDevice() {
    const provider = fiftyonedegrees.provider(config);
    const device = provider.getMatch(window.navigator.userAgent);
    this.isMobile = device.IsMobile;
    device.close();
  }

}
