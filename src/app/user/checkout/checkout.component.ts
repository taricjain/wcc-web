import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Checkout } from '../../models';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public order: Object;
  public productId: string;
  public checkout: Checkout;
  constructor(private activeRouter: ActivatedRoute, private router: Router) { 
    if (this.checkout === undefined) {
      this.checkout = new Checkout();
    }
  }

  ngOnInit() {  
    this.checkout.product.id = this.activeRouter.snapshot.paramMap.get('id');
  }

  submitOrder() {
    // Submit order to backend.
    console.log(JSON.stringify(this.checkout));
    this.router.navigate(["/user/menu"]);
  }
}
