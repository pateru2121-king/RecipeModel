import { Component, OnInit, Input } from '@angular/core';

import {  Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  recipes : Recipe[];
  //RecipeEl: Recipe;
  
  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
   
  }
  onSelected(recipe:Recipe){
    
    this.recipeService.selectedRecipe.emit(recipe);
  }
}
