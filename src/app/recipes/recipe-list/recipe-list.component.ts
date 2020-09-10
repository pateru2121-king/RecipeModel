import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  
  

  constructor(private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  addNewRecipe(){
      this.router.navigate(['new'], {relativeTo : this.route});
  }

  
}