import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchComponent } from './pages/search/search.component';
import { ActionComponent } from './pages/action/action.component';
import { AdventuresComponent } from './pages/adventures/adventures.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { ComedyComponent } from './pages/comedy/comedy.component';
import { ScifiComponent } from './pages/scifi/scifi.component';
import { ThrillerComponent } from './pages/thriller/thriller.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'action',component:ActionComponent},
  {path:'adventures',component:AdventuresComponent},
  {path:'animation',component:AnimationComponent},
  {path:'trending',component:TrendingComponent},
  {path:'comedy',component:ComedyComponent},
  {path:'scifi',component:ScifiComponent},
  {path:'thriller',component:ThrillerComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
