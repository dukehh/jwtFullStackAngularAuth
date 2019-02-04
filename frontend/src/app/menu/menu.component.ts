import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gh-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private auth: BasicAuthenticationService) {}

  ngOnInit() {}

  isUserLoggedIn() {
    return this.auth.isUserLoggedIn();
  }
}
