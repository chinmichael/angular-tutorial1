import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service"; //장바구니 서비스 import

//import { ReactiveFormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(//생성자에 의존성 주입

    private route: ActivatedRoute,
    // 생성자에 위에서 가져온 ActivatedRoute심볼의 객체 타입 의존성 주입
    // ActivatedRoute는 Angular 라우터가 동작할 때 사용된 특정 라우팅 규칙
    // 해당 객체에는 라우팅 규칙, 라우팅 변수 등 라우팅 관련 데이터가 담김

    // 그냥 스프링에서도 실컷한 의존성 주입 생각함

    private cartService: CartService
  )
  {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }
  //라우팅변수(라우팅규칙에 선언한 대로 전달)를 읽어(구독) productId를 가져와 이에 해당하는 상품 정보를 갖고 오게 함

  addToCart(product) {
    this.cartService.addToCart(product);
    //위에서 멤버변수?프로퍼티?암튼 의존성 주입했잖 자바스럽게 생각하면 좀 편하다
    window.alert('Your product has been added to the cart!');
  }
}
