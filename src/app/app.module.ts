import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';

import {ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ActionComponent } from './pages/action/action.component';
import { AdventuresComponent } from './pages/adventures/adventures.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { ComedyComponent } from './pages/comedy/comedy.component';
import { ScifiComponent } from './pages/scifi/scifi.component';
import { ThrillerComponent } from './pages/thriller/thriller.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    NavComponent,
    ActionComponent,
    AdventuresComponent,
    AnimationComponent,
    TrendingComponent,
    ComedyComponent,
    ScifiComponent,
    ThrillerComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MovieApiServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
