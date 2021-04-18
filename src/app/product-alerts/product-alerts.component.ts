import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core"; // @angular core패키지 Input 심볼로드> 입력프로퍼티 위함
import { Output, EventEmitter } from "@angular/core"; // 이벤트를 받아 출력하기 위함

@Component({
  // 데코레이터 >> 클래스를 컴포넌트를 동작시킴
  //  >> 아래는 이를 위한 메타데이터
  selector: "app-product-alerts", // css에서 셀렉터 하던거 생각, 컴포넌트 구분, 렌더링 위함
  templateUrl: "./product-alerts.component.html", // 아까 html쪽을 템플릿이라 한거 기억?
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  //export외부서 컴포넌트 조작가능 클래스

  @Input() product; // @Input데코레이터 추가 > 프로퍼티(product)값이 부모인 상품목록 Comp에 전달
  @Output() notify = new EventEmitter(); //  프로퍼티(notify)를 통해 외부로 이벤트 보내기 가능
  constructor() {}

  ngOnInit() {}
}
