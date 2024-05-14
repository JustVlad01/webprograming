import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recipe-search',
    templateUrl: './recipe-search.component.html',
    styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
    query: string = '';

    constructor(
      private spoonacularService: SpoonacularService,
      private router:Router) {}

    searchRecipes() {
        this.spoonacularService.searchRecipes(this.query);
        this.router.navigate(['/recipes']); 
    }

    ngOnInit(): void {}
}
