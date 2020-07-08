import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  public activities = [
    {
      ActivityName: 'kayaking',
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

  constructor() {}

  ngOnInit(): void {}
}
