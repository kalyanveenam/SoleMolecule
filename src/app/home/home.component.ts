import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {

  }
  public activities = [
    {
      name: 'Kayaking',
      image: '../../assets/kayak.jpg',
      description: 'Experience the fresh air and refreshing water at the best possible price.We promise you a thrilling experience that you will remember for lifetime. Click on explore to know more',
    },
    {
      name: 'Fish your way',
      image: '../../assets/fishing.jpg',
      description: 'Cause, why not spend some fun time fishing? ',
    },
    {
      name: 'Hang in and have some drinks',
      image: '../../assets/drinks.jpeg',
      description: 'After spending time at fishing and kayaking, everyone is up for a beer. We provide that as well. So what are you waiting for, click on book now and grab your spot',
    },
  ];

}
