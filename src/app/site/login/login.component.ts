import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
declare const $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username ='';
  password ='';

  constructor(private router:Router,
    private loginService: LoginService ){ 

  }
data: any
  onLogin(): void{
    //ปิด loginMOdal
    $('#loginModal').modal('hide')
    // เรียก api ใช้งาน ใช้ HttpClientModule ทำงาน
    this.loginService.get(this.username,this.password)
      .subscribe(result=>{
        this.data=result
        this.loginService.loginData=this.data
        if(this.data.status==='user')
          this.router.navigate(['user'])
        else if(this.data.status==='staff')
          this.router.navigate(['admin'])
        else
          alert(this.data.status)
      })
  }
}

