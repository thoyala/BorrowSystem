import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items: any
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.items=this.cartService.cartItems
  }
  onSelectQTY(event:any,i:any){
    this.cartService.cartItems[i].quantity=event.target.value
    console.log(this.cartService.cartItems)
  }
  removeCart(i:any){
    this.cartService.cartItems.splice(i,1)
    console.log(this.cartService.cartItems)
  }

  }

  

