import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeSelected: Recipe;
  id: number;
  constructor(private slService: ShoppingListService, private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeSelected = this.recipesService.getRecipe(this.id);
      }
    )
  }

  sendToShoppingList (ingredientsData: Ingredient[]) {
    this.slService.fromShoppingList(ingredientsData);
  }
  
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
