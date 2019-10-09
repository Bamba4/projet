import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { BookServiceService } from '../book-service.service';
import { Subscription } from 'rxjs';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
produitSubscription: Subscription;
  nombre: number;
  produits: Book[];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private bookService: BookServiceService) {
    this.produitSubscription = this.bookService.bookSubsject.subscribe(
      data => console.log(data)
    );
    this.bookService.emitBooks();
}
  opencard() {
      this.nombre += 1;
  }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  ngOnInit() {

  }


}
