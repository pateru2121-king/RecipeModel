import { Injectable, EventEmitter } from '@angular/core';


import { Ingredient } from '../shared/ingredient.model';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingrediantschanged = new EventEmitter<Ingredient[]>();
  

  ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomoto', 10)
  ];
 
  getIngrediants(){
    return this.ingredients.slice();
  }
  addIngrediants(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingrediantschanged.emit(this.ingredients.slice());
  }
  addedShoppingList(ingredient: Ingredient[]){
    console.log(ingredient[0]);
    for (let i = 0; i < ingredient.length; i++) {
      this.ingredients.push(ingredient[i]);
      this.ingrediantschanged.emit(this.ingredients.slice());
    }
  }
  constructor() { }
}
