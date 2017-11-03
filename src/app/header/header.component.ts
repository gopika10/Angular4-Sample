import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName= "Sample";
  loginClicked = false;
  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    this.loginClicked = true;
    console.log(this.loginClicked);
  }
}
