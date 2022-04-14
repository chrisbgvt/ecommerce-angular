import { Component, OnInit } from '@angular/core';
import { IOrder } from '../interfaces/order';
import { IUserLogin } from '../interfaces/userLogin';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  order: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.order = JSON.parse(localStorage.getItem('placedOrder')) || [];

    console.log(this.user, this.order);
    
  }

}
