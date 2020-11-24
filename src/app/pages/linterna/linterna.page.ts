import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-linterna',
  templateUrl: './linterna.page.html',
  styleUrls: ['./linterna.page.scss'],
})
export class LinternaPage implements OnInit {
  fondo = 'transparent';
  sw = false;
  opacidad = 0.0;
  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
  }

  switchflash(event: any) {
    const linterna: boolean = event.target.checked;

    if (linterna) {
      this.flashlight.switchOn();
      this.fondo = 'url(../../../assets/luz2.PNG) 0 0/100% 100% no-repeat';
      this.sw = true;
      this.opacidad = 1;
    } else {
      this.flashlight.switchOff();
      this.fondo = 'transparent';
      this.sw = false;
      this.opacidad = 0.0;
    }
  }

  linternaOff() {
    this.flashlight.switchOff();
  }

}
