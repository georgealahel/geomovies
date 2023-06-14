import { Component,HostListener,ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  @ViewChild('navbarMenu') navbarMenu!: ElementRef;

  ngOnInit() {
 }


  title = 'GEOMOVIES';
  navbg:any;
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop,'scrolllength#');

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000',
      }
    }else
    {
        this.navbg = {
          'background-color':'#00000085',
        }
    }
  }
}
