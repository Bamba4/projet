import { Injectable } from '@angular/core';
import { Book } from './models/book.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BookServiceService {
produits: Book[];
bookSubsject = new Subject<Book[]>();

  constructor(private httpClient: HttpClient) {
    this.emitBooks();
  }
  emitBooks() {
    this.bookSubsject.next(this.produits);
  }
  getBooks() {
 firebase.database().ref('/books')
      .on('value', (data: DataSnapshot) => {
          this.produits = data.val() ? data.val() : [];
          this.emitBooks();
        }
      );
  }}
