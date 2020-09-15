import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id: number;
   ingredient : Ingredient[];
  constructor(private recipeService: RecipeService,
              private shoppingService : ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { 
    
  }

  ngOnInit(): void {
  //   this.recipeService.selectedRecipe.subscribe(
  //     (recipe:Recipe) => {
  //       this.recipe = recipe;
  //       //console.log(recipe.ingrediants);
  //     }
  //  );
  this.route.params
        .subscribe(
          (params: Params) =>{
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipeNew(this.id);
          }
        );
    
  }
  addToShoppingList(){
   //console.log(this.recipe.ingrediants);
   const ingredients = this.recipe.ingrediants;
   this.shoppingService.addedShoppingList(ingredients);
    
  }
  onEditRecipe(){
      this.router.navigate(['edit'], {relativeTo : this.route});
  }
  onDelete(){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['../'], {relativeTo: this.route});
  }
  
}
