import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  adminData:any
  constructor(private loginService: LoginService){}

  ngOnInit(): void {
    this.adminData=this.loginService.loginData
    console.log(this.adminData)
  }
}
