import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favorites: any[] = []; // Array contenente i preferiti

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    const favoritesStr = localStorage.getItem('favorites');
    if (favoritesStr) {
      this.favorites = JSON.parse(favoritesStr); // Carica i preferiti da localStorage
    }
  }

  hasFavorites(): boolean {
    return this.favorites.length > 0; // Verifica se ci sono preferiti presenti
  }

  removeFavorite(favorite: any) {
    const index = this.favorites.indexOf(favorite); // Ottiene l'indice del preferito da rimuovere
    if (index > -1) {
      this.favorites.splice(index, 1); // Rimuove il preferito dall'array
      localStorage.setItem('favorites', JSON.stringify(this.favorites)); // Aggiorna i preferiti in localStorage
    }
  }
}


