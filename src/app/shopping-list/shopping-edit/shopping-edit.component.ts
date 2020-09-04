import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  ingName: string;
  ingAmount: number;
  @Output() newIngrediant = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  addToIngrediants(){
    const newIngrediant = new Ingredient(this.ingName, this.ingAmount);
    this.newIngrediant.emit(newIngrediant);
  }
}
