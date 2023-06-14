import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  constructor(private service:MovieApiServiceService,private title:Title,private meta:Meta, public auth: AuthService, public router: Router) {
    this.title.setTitle('Search movies - Geotime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

   actionMovieResult: any = [];

  ngOnInit(): void {

    if (this.auth.isLoggedIn == false) {
      this.router.navigate(['/login']);
    }

    this.actionMovie();
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

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  }





