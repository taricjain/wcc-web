import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Checkout } from '../../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public order: Object;
  public productId: string;
  public checkout: Checkout;
  constructor(private activeRouter: ActivatedRoute, private router: Router, private http: HttpClient) { 
    if (this.checkout === undefined) {
      this.checkout = new Checkout();
    }
  }

  ngOnInit() {  
    this.checkout.product.id = this.activeRouter.snapshot.paramMap.get('id');
  }

  submitOrder() {
    // Submit order to backend.
    console.log(this.checkout);
    this.http.post("http://wccapi.ml:8080/order/new", this.checkout).subscribe(response => {
      console.log('uploaded.');
    },
  err => {
    console.log('Error.');
    this.router.navigateByUrl("/");
  });
  }
}
