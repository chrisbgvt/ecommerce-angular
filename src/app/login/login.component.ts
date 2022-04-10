import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(loginForm: NgForm): void {
    this.authService.login(loginForm.value).subscribe({
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
