import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  //저번 라우팅때도 그랬지만 딱봐도 Init(intialize)할 때 처리할거 때려박는다 생각

}

// 저번에 먼가 빡쎘던 라우팅 개념도 그냥 config에 정리된 대로 url이동 한다고 생각하면 편함
// + vue강의서 들은 바인딩 개념 으로 이해