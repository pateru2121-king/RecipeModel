import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  ingName: string;
  ingAmount: number;
  
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
  }
  addToIngrediants(){
    const newIngrediant = new Ingredient(this.ingName, this.ingAmount);
    this.shoppingService.addIngrediants(newIngrediant);
  }
}
