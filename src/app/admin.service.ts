import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin, CallbackInterface } from './models';
import { environment } from '../environments/environment';

@Injectable()
export class AdminService {
  private currentAdmin: Admin;
  constructor(private httpService: HttpClient) {
  }

  public loginAdmin(username: string, password: string, callback:CallbackInterface) {
    const resourceURL: string = environment.BASE_API_URL + "/admin/login/";
    const loginPayload: Object = {
      username: username,
      password: password
    };
    this.httpService.post(resourceURL, loginPayload)
    .subscribe((data) => {
      this.currentAdmin = data as Admin;
      callback(null, data as Admin);
    });
  }

  public isAuthenticated(): boolean {
    if (this.currentAdmin !== undefined) {
      return true;
    }
    return false;
  }
}
