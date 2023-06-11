import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  searchText: string = ''; // Variabile per memorizzare il testo di ricerca dell'utente
  characters: any[] = []; // Array per memorizzare i personaggi ottenuti dalla ricerca

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchCharacters(); // Esegue la ricerca dei personaggi all'inizio dell'inizializzazione del componente
  }

  searchCharacters() {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
    const url = `${apiUrl}?name=${this.searchText}`; // URL per la ricerca dei personaggi con il testo specificato

    this.http.get(url).subscribe((response: any) => {
      this.characters = response.results; // Assegna i personaggi ottenuti dalla risposta dell'API all'array 'characters'
    });
  }
}

