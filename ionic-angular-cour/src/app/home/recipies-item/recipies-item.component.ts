import { Component, OnInit, Input } from '@angular/core';
import { HomeModel } from '../home.model';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.scss'],
})
export class RecipiesItemComponent implements OnInit {
@Input() recipieItem: HomeModel;
  constructor() { }

  ngOnInit() {}

}
