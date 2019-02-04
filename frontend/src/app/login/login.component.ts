import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'dukehh';
  password = 'dummy';
  isValidLogin = true;

  constructor(
    private router: Router,
    private auth: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleBasicLogin() {
    this.auth
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.isValidLogin = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          this.isValidLogin = true;
        }
      );
  }
}
