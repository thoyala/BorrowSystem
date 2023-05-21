import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData = {
    userid:'',
    name:'',
    picture:''
  }
  url = 'http://localhost/borrowsystem_api/login.php'
  constructor(private httpClient: HttpClient) { }

  get(username:any,password:any){
    const criteria = '?username='+username+'&password='+password
    return this.httpClient.get(this.url + criteria)
  }
}
