import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checkout, CallbackInterface } from './models';
import { environment } from '../environments/environment';

@Injectable()
export class OrderService {

  constructor(private httpService: HttpClient) { }

  // createOrder
  createOrder(orderCheckout: Checkout, callback: CallbackInterface){
    // Process checkout object and send request to server
    if (orderCheckout.user.fullName !== undefined &&
      orderCheckout.user.fullName.length > 3 &&
      orderCheckout.user.email !== undefined &&
      orderCheckout.user.email.length > 3 &&
      orderCheckout.user.mobileNumber !== undefined &&
      orderCheckout.user.mobileNumber.length > 0) {
      
      var resourceString: string = environment.BASE_API_URL + "/order/new/";
      this.httpService.post(resourceString, orderCheckout)
      .subscribe((response) => callback(null, response), (err) => callback(err));
      return;
    }

    callback(new Error("form validation failed"));
  }
  // retriveOrder
  retriveOrder(orderId: number, callback: CallbackInterface) {
    var resourceString: string = environment.BASE_API_URL + "/order/" + orderId as string;
    this.httpService.get(resourceString)
    .subscribe((data) => callback(null, data), (err) => callback(new Error("error getting order.")));
  }
  // updateOrder
  updateOrder(order: Checkout, callback: CallbackInterface) {
    var resourceString: string = environment.BASE_API_URL + "/order/" + order.id as string;
    this.httpService.put(resourceString, order)
    .subscribe((data) => callback(null, data), (error) => callback(new Error("error updating order.")));
  }
  // deleteOrder
  // getMenu
  getMenu(callback: CallbackInterface, limit?: number, offset?: number) {
    var resourceString: string = environment.BASE_API_URL + "/order/product/";
    this.httpService.get(resourceString)
    .subscribe((data) => callback(null, data), (err) => callback(new Error("error getting menu")));
  }
}
