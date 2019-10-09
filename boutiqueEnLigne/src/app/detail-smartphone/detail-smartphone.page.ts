import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-detail-smartphone',
  templateUrl: './detail-smartphone.page.html',
  styleUrls: ['./detail-smartphone.page.scss'],
})
export class DetailSmartphonePage implements OnInit {

  constructor() { }
  slideOpts = {
    initialSlide: 1,
    speed: 500
  };
  ngOnInit() {
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
