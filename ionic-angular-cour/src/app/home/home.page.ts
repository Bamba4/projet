import { Component, OnInit } from '@angular/core';
import { HomeModel } from './home.model';
import { RecipeserviceService } from '../recipeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
texts = 'default starting text';
recipies: HomeModel[];
amount = '';
reasing = '';

  constructor(private recipieService: RecipeserviceService , private router: Router) {}

  onChangeText() {
      this.texts = 'A another text';
  }
  onClear() {
    this.amount = '';
    this.reasing = '';
  }
  ngOnInit() {
    this.recipies = this.recipieService.getAllRecipies();
  }
}
