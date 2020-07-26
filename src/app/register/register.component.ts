import { Component, OnInit } from '@angular/core';
import { HttpConnect } from '../login/httpconnect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HttpConnect],
})
export class RegisterComponent implements OnInit {
  constructor(private httpConnect: HttpConnect, private router: Router) {}
  submitForm = (value) => {
    this.httpConnect
      .signup(value.name, value.email, value.phone, value.password)
      .subscribe((response) => {
        if (response['error']=false) {
          console.log(response);
          this.router.navigate(['/login']);
        }
      });
  };
  ngOnInit(): void {}
}
