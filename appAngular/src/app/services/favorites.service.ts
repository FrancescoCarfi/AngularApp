import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: any[] = [];  // Array che conterrà gli elementi preferiti

  constructor() { }

  getFavorites(): any[] {
    const favoritesStr = localStorage.getItem('favorites');  // Ottiene la stringa dei preferiti dal localStorage
    if (favoritesStr) {
      this.favorites = JSON.parse(favoritesStr);  // Se la stringa esiste, la converte in array e la assegna a 'favorites'
    }
    return this.favorites;  // Restituisce l'array dei preferiti
  }

  isCharacterInFavorites(character: any): boolean {
    const favorites = this.getFavorites();  // Ottiene l'array dei preferiti
    return favorites.some((fav: any) => fav.id === character.id);  // Verifica se l'elemento è presente tra i preferiti confrontando gli id
  }

  addFavorite(character: any) {
    const favorites = this.getFavorites();  // Ottiene l'array dei preferiti
    if (!this.isCharacterInFavorites(character)) {  // Verifica se l'elemento non è già presente tra i preferiti
      favorites.push(character);  // Aggiunge l'elemento all'array dei preferiti
      localStorage.setItem('favorites', JSON.stringify(favorites));  // Salva l'array aggiornato nel localStorage come stringa JSON
    }
  }

  removeFavorite(character: any) {
    const favorites = this.getFavorites();  // Ottiene l'array dei preferiti
    this.favorites = favorites.filter((fav: any) => fav.id !== character.id);  // Filtra l'array dei preferiti rimuovendo l'elemento corrispondente all'id specificato
    localStorage.setItem('favorites', JSON.stringify(this.favorites));  // Salva l'array aggiornato nel localStorage come stringa JSON
  }
}
