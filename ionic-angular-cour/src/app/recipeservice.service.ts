import { Injectable } from '@angular/core';
import { HomeModel } from './home/home.model';

@Injectable()
export class RecipeserviceService {
  recipies: HomeModel[] = [
    {
      id: 1,
      title: 'Schnitzel',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSCgNS_Ij9jeCmfwYkwTrWClCfdk36nAbeqLDKxxzKK18HsWz',
      ingredients: ['French Fries' , 'Pork Meat' , 'salad']
    },
    {
      id: 2,
      title: 'Schnitzel',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0ub78kIqvmA13W9Sr6VdDcu0ciXwScvgKgDKQuitqLAQoUxJng',
      ingredients: ['French Fries' , 'Pork Meat']
    }
  ];
  constructor() { }
  getAllRecipies() {
    return [...this.recipies];
  }
  getRecipie(recipieid: number) {
    return {...this.recipies.find(recipie => {
        return recipie.id === recipieid;
    })};
  }

  deleteRecipie(id: number) {
    this.recipies = this.recipies.filter(recipie => {
        return recipie.id === id;
    })
  }
}
