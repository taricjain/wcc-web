import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
var accessToken: string;

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
      .then((response: LoginResponse) => accessToken = response.authResponse.accessToken)
      .then((response) => console.log('Logged In', accessToken))
      .catch((error: any) => console.error(error));
      
    this.fb.api('/me', 'get', function(response){
      console.log('Successful login for: ' + response.name);
      console.log(response);
       document.getElementById('status').innerHTML =
       'Thanks for logging in, ' + response.name + '!';
       document.getElementById('username').nodeValue=response.name;
       document.getElementById('user').nodeValue=response.id;
       document.getElementById('email').nodeValue=response.email;
    });
  }

  ngOnInit() {}
}
