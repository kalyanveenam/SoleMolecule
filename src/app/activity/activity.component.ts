import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
@Input() name: string;
@Input() description:string;
@Input() image:string;

  constructor() { }

  ngOnInit(): void {
    console.log('name is '+this.image);
  }


}
