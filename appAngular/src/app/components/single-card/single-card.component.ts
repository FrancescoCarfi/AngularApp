import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss']
})
export class SingleCardComponent implements OnInit {
  characterId: number | undefined; // Identificatore del personaggio
  character: any; // Oggetto che rappresenta il personaggio
  isFavorite: boolean = false; // Indica se il personaggio è tra i preferiti dell'utente
  alreadyAdded: boolean = false; // Indica se il personaggio è già stato aggiunto ai preferiti
  notInFavorites: boolean = false; // Indica se il personaggio non è presente nei preferiti
  firstAdded: boolean = false; // Indica se è stato il primo personaggio ad essere aggiunto ai preferiti
  firstRemoved: boolean = false; // Indica se è stato il primo personaggio ad essere rimosso dai preferiti

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = +params['id']; // Ottiene l'ID del personaggio dalla route
      this.loadCharacterDetails(); // Carica i dettagli del personaggio
      this.checkIfFavorite(); // Controlla se il personaggio è tra i preferiti
    });  
  }

  loadCharacterDetails() {
    const apiUrl = `https://rickandmortyapi.com/api/character/${this.characterId}`;
    this.http.get(apiUrl).subscribe((response: any) => {
      this.character = response; // Assegna i dettagli del personaggio alla variabile 'character'
    });
  }

  checkIfFavorite() {
    this.isFavorite = this.favoritesService.isCharacterInFavorites(this.character); // Controlla se il personaggio è tra i preferiti
  }  

  addToFavorites() {
    const favorites = this.favoritesService.getFavorites();
    if (this.favoritesService.isCharacterInFavorites(this.character)) {
      this.alreadyAdded = true; // Il personaggio è già stato aggiunto ai preferiti
      this.notInFavorites = false;
      this.firstAdded = false;
      this.firstRemoved = false;
    } else {
      this.alreadyAdded = false;
      this.notInFavorites = false;
      this.favoritesService.addFavorite(this.character); // Aggiunge il personaggio ai preferiti
      this.firstAdded = true; // Il personaggio è stato il primo ad essere aggiunto ai preferiti
      this.firstRemoved = false;
    }
  }

  removeFromFavorites() {
    if (!this.favoritesService.isCharacterInFavorites(this.character)) {
      this.notInFavorites = true; // Il personaggio non è presente nei preferiti
      this.alreadyAdded = false;
      this.firstAdded = false;
      this.firstRemoved = false;
    } else {
      this.alreadyAdded = false;
      this.notInFavorites = false;
      this.favoritesService.removeFavorite(this.character); // Rimuove il personaggio dai preferiti
      this.firstAdded = false;
      this.firstRemoved = true; // Il personaggio è stato il primo ad essere rimosso dai preferiti
    }
  }  
}

