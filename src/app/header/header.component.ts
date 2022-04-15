import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = JSON.parse(localStorage.getItem('isLogged'));
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn);
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
    localStorage.setItem('isLogged', JSON.stringify(false));
    console.log(this.isLoggedIn)
  }

}
