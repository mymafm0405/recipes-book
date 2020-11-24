import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipeSelected: Recipe;
  constructor() {
    console.log(this.recipeSelected);
  }

  ngOnInit(): void {
  }

}
