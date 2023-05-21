import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit{
  userData: any
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.userData = this.loginService.loginData
    // console.log(this.userData)
  }
}
