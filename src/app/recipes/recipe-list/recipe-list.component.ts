import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() getRecipeData = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe1', 'Test description', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('Test recipe2', 'Test description2', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('Test recipe3', 'Test description3', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeData: Recipe) {
    this.getRecipeData.emit(recipeData);
  }

}
