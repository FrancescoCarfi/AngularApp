import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListingComponent } from './components/listing/listing.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { SingleCardComponent } from './components/single-card/single-card.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { FavoritesService } from './services/favorites.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListingComponent,
    ErrorpageComponent,
    SingleCardComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
