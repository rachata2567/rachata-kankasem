import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight ? : number;
  hight ? : number;
  result ? : number;
  result_text : string ="";
  constructor() {}

  onCal(){
    console.log("w : " + this.weight)
    console.log("h : " + this.hight)
    if(this.weight == undefined || this.hight == undefined){
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
      return;
    }
    var hi = this.hight / 100 ;
    this.result = this.weight / (hi * hi)
    console.log('result' + this.result)

    if(this.result < 18.5){
       this.result_text ="ผอมเกินไป";
    }else if(this.result >= 18.6 && this.result <= 24.9){
      this.result_text ="อยู่เกณฑ์ปกติ เหมาะสม";
    }else if(this.result >= 25 && this.result <= 30.9){
      this.result_text ="อ้วน";
    }else {
this.result_text = "อ้วนมาก";
    }
  }
}
