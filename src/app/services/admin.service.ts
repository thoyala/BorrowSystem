import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost/borrowsystem_api/admin.php'

  constructor(private httpClient:HttpClient) { }

  //เพิ่มข้อมูล
  post(data:any){
    console.log(data)
    return this.httpClient.post(this.url,data)
  }

  //แสดงข้อมูล
  get(data:any){
    console.log(data)
    return this.httpClient.get(this.url, data)
  }

  //แก้ไข
  put(data:any){
    console.log(data)
    return this.httpClient.put(this.url, data)
  }

  //ลบ
  delete(userid:any){
    return this.httpClient.delete(this.url +'?userid='+userid)
  }
   
}
