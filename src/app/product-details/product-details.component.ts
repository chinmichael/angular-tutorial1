import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

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

  constructor(
    private route: ActivatedRoute // 생성자에 위에서 가져온 ActivatedRoute심볼의 객체 타입 의존성 주입
  ) // ActivatedRoute는 Angular 라우터가 동작할 때 사용된 특정 라우팅 규칙
  // 해당 객체에는 라우팅 규칙, 라우팅 변수 등 라우팅 관련 데이터가 담김
  {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }
  //라우팅변수(라우팅규칙에 선언한 대로 전달)를 읽어(구독) productId를 가져와 이에 해당하는 상품 정보를 갖고 오게 함
}
