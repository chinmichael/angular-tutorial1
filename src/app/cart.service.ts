import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; //머 전역추가해도 여기도 추가함

@Injectable()
/*
@Injectable({providedIn: 'root'})

StackBlitz의 경우 서비스가 자동으로 app.module에 등록이 되지만
Angular CLI을 통해 생성할 경우 번들링 최적화를 위해 데코레이터에 위처럼 지정 + 앱모듈 등록X

번들링 : 묶는 개념 : 모듈화한 (JS) 파일들을 묶어주는것

데코레이터 패턴 : 객체결합으로 기능을 동적으로 확장하기 위함
추가 기능을 데코레이터 클래스로 정의 후 필요한 데코레이터 기능을 추가시킴
*/
export class CartService {
  constructor(
    private http: HttpClient // 이것도 key : value !!
  ) {}

  items = []; //장바구니 상품 저장

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}

/*
Service : 스프링의 Service와 같은 맥락
Application 구성요소끼리 데이터를 공유하기 위해 사용
클래스 인스턴스이며 Angular 의존성 주입 시스템으로 주입 가능

슬슬 좀 먼가 자바스럽게 생각이 되기 시작하네...

*/
