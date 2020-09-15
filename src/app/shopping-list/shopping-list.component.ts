import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngrediants();
    this.shoppingService.ingrediantschanged.subscribe(
      (ingrediant : Ingredient[]) => {
        this.ingredients = ingrediant;
      }
    );

  }
  onEditItem(index: number){
      this.shoppingService.startedEditing.emit(index);
  }
 
}
