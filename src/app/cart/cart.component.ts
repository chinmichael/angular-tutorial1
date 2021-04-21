import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name : '',
      address : ''
    }); // 생성자에 의존성주입받은 폼빌더의 group메서드를 이용, 폼멤버변수에 저장할당
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  //저번 라우팅때도 그랬지만 딱봐도 Init(intialize)할 때 처리할거 때려박는다 생각

  onSubmit(customerData) { // 폼 제출 시 주문 로직 구현부
    this.items = this.cartService.clearCart(); //장바구니 비우기
    this.checkoutForm.reset(); // 폼초기화

    console.warn('Your order has been submitted', customerData);
  }
}

// 저번에 먼가 빡쎘던 라우팅 개념도 그냥 config에 정리된 대로 url이동 한다고 생각하면 편함
// + vue강의서 들은 바인딩 개념 으로 이해

/*
4/21일 폼
Angular 반응형 form
HTML form을 기반으로 동작 + 유효성검사의 편의성을 위한 form control제공
(Template)                (component 폼 구성 및 관리)

폼모델(컴포넌트 클래스에 저장) : 폼 데이터 저장 및 폼의 상태를 표현
FormBuilder 서비스를 이용하면 편하다
프론트와 백을 구분하는 만큼 프론트에서 유효성 처리를 할 수 있으면 좋긴 할듯(이건 상황따라)

*/