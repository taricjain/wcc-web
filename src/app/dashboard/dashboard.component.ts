import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productList: Array<Object>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://165.227.214.188:8080/order/product/").subscribe(data => {
      if (this.productList === undefined || this.productList.length > 0) {
        this.productList = new Array<Object>();
      }
      for (let product of data as Array<Object>) {
        this.productList.push(product);
      }
    });
  }

  buyProduct(product: Object) {
    this.router.navigate(["/order"]);
  }
}
