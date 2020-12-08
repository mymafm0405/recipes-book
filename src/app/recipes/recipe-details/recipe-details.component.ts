import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private slService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute) {
    console.log(this.recipeSelected);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeSelected = this.recipesService.getRecipe(+params['id']);
      }
    )
  }

  sendToShoppingList (ingredientsData: Ingredient[]) {
    this.slService.fromShoppingList(ingredientsData);
  }

}
