import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  currentRecipe: Recipe;

  constructor(private route: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.currentRecipe = this.recipesService.getRecipe(this.id);
        this.initForm();
      }
    )
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      recipeName = this.currentRecipe.name;
      imagePath = this.currentRecipe.imageUrl;
      description = this.currentRecipe.description;
      if (this.currentRecipe['ingredients']) {
        for (let ing of this.currentRecipe.ingredients) {
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ing.name),
              'amount': new FormControl(ing.amount)
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(imagePath),
      'description': new FormControl(description),
      'ingredients': ingredients
    })
  }

  getIngControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    console.log(this.recipeForm.value);
  }

}
