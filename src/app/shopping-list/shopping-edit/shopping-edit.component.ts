import { Component, OnInit, EventEmitter, Output, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{ static: false}) slForm: NgForm;
  subscription: Subscription;
  shoppingEdit = false;
  editedItem:Ingredient;
  editedItemIndex:number;
  formReset:any;
  
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index:  number) => {
          this.editedItemIndex = index;
          this.editedItem = this.shoppingService.getEditIngredient(index);
          this.shoppingEdit = true;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
      }

    );
  }
  onSubmit(form: NgForm){
    const formvars = form.value;
    const newIngrediant = new Ingredient(formvars.name, formvars.amount);
    if(this.shoppingEdit){
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngrediant)
    }
    else{
      this.shoppingService.addIngrediants(newIngrediant);
    }
    this.shoppingEdit = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.shoppingEdit = false;
  }
  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }


}
