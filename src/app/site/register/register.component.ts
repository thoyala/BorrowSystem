import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name=''
  address=''
  telephone=''
  username=''
  password=''
  url='http://localhost/borrowsystem_api/user.php'
  constructor (private httpClient: HttpClient){}
  data: any
  onRegister(){
    //เรียก api เพื่อ insert user
    const name=this.name
    const address=this.address
    const telephone=this.telephone
    const username=this.username
    const password=this.password
    this.httpClient.post(this.url, {name,address,telephone,username,password})
      .subscribe(result=>{
        this.data=result
        alert(this.data.status)
      })
  }
}
