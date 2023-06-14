import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor ( public router : Router, public auth: AuthService, private service:MovieApiServiceService) {}

  trendingMovieResult: any = [];

  ngOnInit (): void {

    this.trendingData();
  }

  login () {

    this.auth.isLoggedIn = true;
    this.router.navigate(['/home']);
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }


}
