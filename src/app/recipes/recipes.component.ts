import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeData: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onGettingRecipeData(recipeData: Recipe) {
    this.recipeData = recipeData;
  }

}
