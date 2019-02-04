import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParseTreeResult } from '@angular/compiler';

@Component({
  selector: 'gh-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = 'duke';
  message = '';
  errMessage = '';

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParameter() {
    this.service
      .executeHelloWorldBeanServiceWithPathVariable(this.name)
      .subscribe(
        data => this.handleSuccessfulResponse(data),
        error => this.handleErrorResponse(error)
      );
  }

  handleSuccessfulResponse(response) {
    this.message = response.message;
    this.errMessage = '';
  }

  handleErrorResponse(error) {
    this.errMessage = error.error.message;
    this.message = '';
  }
}
