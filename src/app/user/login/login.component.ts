import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import { Response } from '@angular/http/src/static_response';
import { AsyncLocalStorage } from 'angular-async-local-storage';

interface User {
  name: string;
  email: string;
  accessToken: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit { 

  constructor(private fb: FacebookService, protected localStorage: AsyncLocalStorage) {
    console.log('Initializing Facebook');
    let initParams: InitParams = {
      appId: '1951970428387803',
      cookie: true,
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
      .then((res: LoginResponse) => { console.log('Logged in', res) })
      .then((res) => this.getProfile())
      .then((res) => this.getFriends())
      .catch((error: any) => console.error(error));
  }

  getProfile() {
    this.fb.api('/me', 'get', {'fields': 'name,email'})
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch((error: any) => console.error(error));
  }

  getFriends() {
    this.fb.api('/me/friends', 'get')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch((error: any) => console.error(error));
  }
  ngOnInit() {}
}
