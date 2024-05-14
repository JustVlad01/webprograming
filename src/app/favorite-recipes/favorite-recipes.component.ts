import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpoonacularService } from '../spoonacular.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private spoonacularService: SpoonacularService, private http: HttpClient) {}

  ngOnInit(): void {
    this.refreshFavorites();
  }

  refreshFavorites() {
    this.spoonacularService.getFavorites().subscribe(favorites => {
      this.recipes = favorites;
    });
  }

  deleteFavorite(recipeId: string): void {
    this.http.delete(`http://localhost:5050/favorites/${recipeId}`).subscribe({
      next: () => {
        console.log('Deleted from favorites');
        this.refreshFavorites();  // Refresh the list after deletion
      },
      error: (error) => console.error('Error deleting from favorites', error)
    });
  }
}
