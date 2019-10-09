import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: number;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
  opencard() {
      this.nombre += 1;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
