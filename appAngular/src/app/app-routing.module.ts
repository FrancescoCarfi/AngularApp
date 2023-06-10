import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Reindirizza alla pagina di login come predefinita
  { path: 'login', component: LoginComponent }, // Pagina di login
  { path: 'error', component: ErrorpageComponent }, // Pagina di errore
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Pagina principale, accessibile solo per utenti autenticati
  { path: 'listing', component: ListingComponent, canActivate: [AuthGuard] }, // Pagina di elenco, accessibile solo per utenti autenticati
  { path: 'listing/:id', component: SingleCardComponent, canActivate: [AuthGuard] }, // Pagina di dettaglio di un elemento, accessibile solo per utenti autenticati
  { path: 'favorites', component: FavouritesComponent, canActivate: [AuthGuard] }, // Pagina dei preferiti, accessibile solo per utenti autenticati
  { path: '**', redirectTo: '/error' } // Reindirizza a pagina di errore per tutte le altre route non definite
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
