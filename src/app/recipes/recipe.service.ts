import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeswasChanged = new EventEmitter<Recipe[]>();
  selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }
  // private recipes : Recipe[] = [
  //   new Recipe('Sourdough Chicken Club' ,
  //    'Contains: Milk, Eggs, Soy, Wheat',
  //     'https://cdn.sanity.io/images/czqk28jt/prod_bk_ca/ef6c374ff3a0675f280e3d86d2d5bf1bd548b532-650x450.png?w=320&fm=webp&q=40&fit=max',
  //     [
  //       new Ingredient('Milk', 2),
  //       new Ingredient('Eggs', 3),
  //       new Ingredient('Soy', 7),
  //       new Ingredient('Wheat', 8)
  //     ]
  //     ),


  //   new Recipe('Biryani' , 
  //   'The biryani rice is dum (steamed) cooked with chicken 65 masala (spices).', 
  //   'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg',
  //   [
  //     new Ingredient('Indian Spices',10),
  //     new Ingredient('Meat', 5),
  //     new Ingredient('Rice', 1)
  //   ]
  //   ),
    
  // ];
 private recipes: Recipe[] = [];

  setRecipe(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeswasChanged.emit(this.recipes.slice());
    
  }

  getRecipe(){
    return this.recipes.slice();
   
  }
  getRecipeNew(index:number){
    return this.recipes[index];
   }

  addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipeswasChanged.emit(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe){
    this.recipes[index] = newRecipe;
    this.recipeswasChanged.emit(this.recipes.slice());
    
    
  }
  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipeswasChanged.emit(this.recipes.slice());
    
  }
 
}
