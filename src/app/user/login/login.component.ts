import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit { 
  constructor(private fb: FacebookService) {
    console.log('Initializing Facebook');
    let initParams: InitParams = {
      appId: '1951970428387803',
      xfbml: true,
      version: 'v2.11'
    };
    fb.init(initParams);
  }
  login() {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };
    this.fb.login(loginOptions)
      .then((response: LoginResponse) => console.log('Logged In', response))
      .catch((error: any) => console.error(error));
  }
  ngOnInit() {}
}
