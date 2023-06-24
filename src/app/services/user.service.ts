import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost/borrowsystem_api/user.php'
  constructor(private httpClient: HttpClient) { }

  //เพิ่มข้อมูล
  post(data: any){
    console.log(data)
    return this.httpClient.post(this.url, data)
  }
  //แสดง
  get(){
    return this.httpClient.get(this.url)
  }
  //แก้ไข
  put(data: any){
    console.log(data)
    return this.httpClient.put(this.url, data)
  }
  //ลบ
  delete(userid:any){
    console.log(userid)
    return this.httpClient.delete(this.url + '?userid='+userid)
  }
}
