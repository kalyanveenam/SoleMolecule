import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'ngSlick';

  slides = [1, 2, 3, 4];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: false,
  };

  constructor() {}
  public activities = [
    {
      ActivityName: 'Kayaking',
      image: '../../assets/kayak.jpg',
      Description: 'This is sample description',
    },
    {
      ActivityName: 'Fish your way',
      image: '../../assets/fishing.jpg',
      Description: 'This is sample description',
    },
    {
      ActivityName: 'Hang in and have some drinks',
      image: '../../assets/drinks.jpeg',
      Description: 'This is sample description',
    },
  ];
  slickInit(e) {
    console.log('slick initialized');
  }
  breakpoint(e) {
    console.log('breakpoint');
  }
  afterChange(e) {
    console.log('afterChange');
  }
  beforeChange(e) {
    console.log('beforeChange');
  }
  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 10) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  }
}
