import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // email: string;
  // userName: string;
  // pass: string;
  // firstName: string;
  // lastName: string;
  // city: string;
  // street: string;
  // number: number;
  // zip: string;
  // lat: string;
  // lon: string;
  // phone: string;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(registerForm: NgForm): void {

    // const body: IUser = {
    //   email: this.email,
    //   username: this.userName,
    //   password: this.pass,
    //   name: {
    //       firstname: this.firstName,
    //       lastname: this.lastName
    //   },
    //   address:{
    //       city: this.city,
    //       street: this.street,
    //       number: this.number,
    //       zipcode: this.zip,
    //       geolocation: {
    //           lat: this.lat,
    //           long: this.lon
    //       }
    //   },
    //     phone: this.phone
    // }

    this.authService.register(registerForm.value).subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigate(['']);
      },
      error: (error) => {
        alert(error.message);
      }
    })
  }

}
