import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''; // Variabile per memorizzare l'email inserita dall'utente
  password: string = ''; // Variabile per memorizzare la password inserita dall'utente

  users = [
    { email: 'user1@example.com', password: 'ciao' },
    { email: 'user2@example.com', password: 'ciao' }
  ]; // Elenco degli utenti consentiti (con email e password)

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password
    }; // Crea un oggetto utente con l'email e la password inserite

    const validUser = this.users.find(u => u.email === user.email && u.password === user.password); // Verifica se l'utente inserito è valido
    if (validUser) {
      this.authService.setLoggedIn(true); // Imposta lo stato di accesso dell'utente come autenticato
      this.authService.saveUserData(user); // Salva i dati dell'utente nell'AuthService
      this.router.navigate(['/home']); // Reindirizza l'utente alla pagina home
    } else {
      this.router.navigateByUrl('/error'); // Reindirizza l'utente alla pagina di errore in caso di credenziali non valide
    }
  }
}

