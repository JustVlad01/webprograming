import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpoonacularService {
    private apiKey: string = '9nzmIIVX4lrDvKOQ8LPhIcRieY9plLzy';
    private recipesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    recipes$: Observable<any[]> = this.recipesSubject.asObservable();

    constructor(private http: HttpClient) {}

    searchRecipes(query: string, number: number = 20): void {
        
        // Added 'number' parameter to API call
        const url = `https://api.apilayer.com/spoonacular/recipes/complexSearch?query=${query}&number=${60}`;
        const headers = new HttpHeaders().set('apiKey', this.apiKey);
        
        this.http.get(url, { headers }).subscribe((data: any) => {
            this.recipesSubject.next(data.results);
        });
    }

    

    getFavorites(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:5050/favorites');
    }
}
