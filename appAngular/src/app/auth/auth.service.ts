import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false; // Variabile per memorizzare lo stato di accesso dell'utente
  private userData: any; // Variabile per memorizzare i dati dell'utente

  constructor() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; // Verifica se l'utente è già autenticato
    this.userData = JSON.parse(localStorage.getItem('user') || '{}'); // Recupera i dati dell'utente dalla memoria locale
  }

  public isAuthenticated(): boolean {
    return this.isLoggedIn; // Restituisce lo stato di accesso dell'utente (true se autenticato, altrimenti false)
  }

  public setLoggedIn(value: boolean): void {
    this.isLoggedIn = value; // Imposta lo stato di accesso dell'utente
    localStorage.setItem('isLoggedIn', String(value)); // Salva lo stato di accesso nella memoria locale
  }

  public saveUserData(user: any): void {
    const userData = JSON.stringify(user); // Converte i dati dell'utente in formato JSON
    localStorage.setItem('user', userData); // Salva i dati dell'utente nella memoria locale
    this.userData = user; // Aggiorna la variabile dei dati dell'utente
  }

  public getUserData(): any {
    return this.userData; // Restituisce i dati dell'utente memorizzati
  }

  public clearUserData(): void {
    localStorage.removeItem('user'); // Rimuove i dati dell'utente dalla memoria locale
    this.userData = null; // Resetta la variabile dei dati dell'utente
  }
}


