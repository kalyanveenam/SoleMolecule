import { Component, OnInit } from '@angular/core';
import {HttpConnect} from '../login/httpconnect.service';
@Component({
  selector: 'mynavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[HttpConnect]
})
export class NavbarComponent {
  constructor(){
  }
ngInIt(){
}
}


