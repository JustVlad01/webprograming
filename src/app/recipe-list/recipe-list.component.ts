import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpoonacularService } from '../spoonacular.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];

  constructor(public spoonacularService: SpoonacularService, private http: HttpClient) {}

  ngOnInit(): void {
    this.spoonacularService.recipes$.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  addFavorite(recipe: any): void {
    this.http.post('http://localhost:5050/favorites', recipe).subscribe({
      next: (response) => console.log('Added to favorites!', response),
      error: (error) => console.error('Error adding to favorites', error)
    });
  }
}
