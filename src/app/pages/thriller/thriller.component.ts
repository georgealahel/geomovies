import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent {

  constructor(private service:MovieApiServiceService,private title:Title,private meta:Meta, public auth: AuthService, public router: Router) {
    this.title.setTitle('Search movies - Geotime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

   thrillerMovieResult: any = [];

  ngOnInit(): void {

    if (this.auth.isLoggedIn == false) {
      this.router.navigate(['/login']);
    }

    this.thrillerMovie();
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

}


