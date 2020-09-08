import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   ingredient : Ingredient[];
  constructor(private recipeService: RecipeService,
              private shoppingService : ShoppingListService) { 
    
  }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipe:Recipe) => {
        this.recipe = recipe;
        //console.log(recipe.ingrediants);
      }
   );
    
  }
  addToShoppingList(){
   //console.log(this.recipe.ingrediants);
   const ingredients = this.recipe.ingrediants;
   this.shoppingService.addedShoppingList(ingredients);
    
  }
  
}
