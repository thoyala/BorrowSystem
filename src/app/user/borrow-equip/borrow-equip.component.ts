import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EquipService } from 'src/app/services/equip.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-borrow-equip',
  templateUrl: './borrow-equip.component.html',
  styleUrls: ['./borrow-equip.component.css']
})
export class BorrowEquipComponent implements OnInit{
  userData:any
  //อ่านข้อมูลจากตาราง tbequip มาใช้งาน
  constructor(private equipService: EquipService,
    private loginService: LoginService,
    private cartService: CartService,
    private router: Router){}

data:any
  ngOnInit(): void {
    this.userData=this.loginService.loginData;
    this.equipService.get()
    .subscribe(result=>{
      console.log(result)
      this.data=result // นำ data ไป bind ที่ html
    })
  }
  items:any
  onBorrow(item:any){
    // console.log(item)
    // หาตัวแปรมาเก็บรายการที่ผู้ใช้คลิกยืม
    item.userid = this.userData.userid;
    item.quantity = 1
    this.items=item
    this.findDuplicate()
    if(!this.isDuplicate)
      this.cartService.cartItems.push(item); //เก็บรายการยืมใน array
    else
      alert('ข้อมูลอุปกรณ์ที่จะยืมซ้ำ')
    
    // ย้ายไปที่ cart component
    this.router.navigate(['/user/','cart'])
  }
  isDuplicate=false
  findDuplicate(){
    for(let i=0;i<this.cartService.cartItems.length;i++){
      if(this.items.equipid===this.cartService.cartItems[i].equipid){
        this.isDuplicate=true
        return
      }
    }
  }
}

