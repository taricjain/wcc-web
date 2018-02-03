import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Checkout } from '../../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public order: Object;
  public productId: string;
  public checkout: Checkout;
  public checkoutError: boolean;
  constructor(private activeRouter: ActivatedRoute, private router: Router, private orderService: OrderService) { 
    if (this.checkout === undefined) {
      this.checkout = new Checkout();
    }
  }

  ngOnInit() {  
    this.checkout.product.id = this.activeRouter.snapshot.paramMap.get('id');
  }

  submitOrder() {
    this.orderService.createOrder(this.checkout, (error, result) => {
      if (error) {
        this.checkoutError = true;
      } else {
      this.checkoutError = false;
      }
    });
  }
}
