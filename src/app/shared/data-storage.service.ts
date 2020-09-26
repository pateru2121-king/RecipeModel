import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService} from '../recipes/recipe.service';
import { map,  tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient,
              private recipeservice: RecipeService
              ) { }

  storeRecipes(){
      const recipes = this.recipeservice.getRecipe();
      this.http.put('https://recipemodel-4aa7d.firebaseio.com/recipes.json', recipes).subscribe(
        resData => {
          console.log(resData);
        }
      )
  }
 fetchRecipes(){
  
    return this.http
    .get<Recipe[]>('https://recipemodel-4aa7d.firebaseio.com/recipes.json')
    .pipe(
      map(recipes => {
        
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingrediants ? recipe.ingrediants : []
          };
        });
      }),
      tap(recipes => {
        this.recipeservice.setRecipe(recipes);
        console.log(recipes);
      })
    );
  }
}
