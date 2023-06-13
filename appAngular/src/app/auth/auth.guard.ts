import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated(); // Verifica se l'utente è autenticato
    const requestedUrl = state.url; // URL richiesto dall'utente

    if (isAuthenticated) { // Se l'utente è autenticato, consente l'accesso alla rotta
      return true;
    } else { // Se l'utente non è autenticato, reindirizza alla pagina di errore e nega l'accesso alla rotta
      this.router.navigate(['/error']);
      return false;
    }
  }
}


