import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private httpClient: HttpClient ){ 

  }
data: any
  onLogin(){
    //ปิด loginMOdal
    $('#loginModal').modal('hide')
    // เรียก api ใช้งาน ใช้ HttpClientModule ทำงาน
    const criteria= '?username='+this.username+'&password='+this.password
    // console.log(criteria)
    this.httpClient.get('http://localhost/borrowsystem_api/login.php'+criteria)
      .subscribe(result=>{
        this.data=result
        if(this.data.status==='user')
          this.router.navigate(['user'])
        else if(this.data.status==='staff')
          this.router.navigate(['admin'])
        else
          alert(this.data.status)
      })
  }
}

