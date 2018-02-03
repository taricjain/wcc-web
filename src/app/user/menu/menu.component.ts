import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../../order.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    productList: Array<Object> = new Array<Object>();
  
    hoverDim(): void {
      $(".special.cards .image").dimmer({
        on: "hover"
      });
    }
  
    constructor(private router: Router, private http: HttpClient, private orderService: OrderService) { }
  
    ngOnInit() {
      this.orderService.getMenu((error, response) => {
        if (!error) {
          if (this.productList.length > 0) {
            this.productList = new Array<Object>();
          }
          (response as Array<Object>).forEach(element => {
            this.productList.push(element);
          });
        }
      });
    }
  
    buyProduct(product: Object) {
      this.router.navigate(["/user/checkout", product['id']]);
    }
  }
  