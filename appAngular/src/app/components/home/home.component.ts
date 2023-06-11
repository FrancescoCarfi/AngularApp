import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userEmail: string = ''; // Variabile per memorizzare l'email dell'utente loggato

  constructor(private authService: AuthService, private router: Router) {
    this.userEmail = this.authService.getUserData()?.email || ''; // Ottiene l'email dell'utente dal AuthService
  }

  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef; // Riferimento all'elemento HTML per il toggle della navbar

  toggleNavbarCollapse() {
    if (this.navbarCollapse) {
      this.navbarCollapse.nativeElement.classList.toggle('show'); // Aggiunge o rimuove la classe 'show' per il toggle della navbar
    }
  }
  
  scrollTo(element: string): void {
    const el = document.getElementById(element); // Ottiene l'elemento HTML specificato dall'ID
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }); // Scrolling fluido fino all'elemento specificato
    }
  }

  logout() {
    this.authService.setLoggedIn(false); // Imposta lo stato di accesso dell'utente come non autenticato
    this.authService.clearUserData(); // Cancella i dati dell'utente dal AuthService
    this.router.navigate(['/login']); // Reindirizza l'utente alla pagina di login
  }
}
