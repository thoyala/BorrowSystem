import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipService {
  url = 'http://localhost/borrowsystem_api/equip.php'
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.url)
  }
  post(data: any){
    return this.httpClient.post(this.url,data)
  }
  put(data:any){
    return this.httpClient.put(this.url,data)
  }
  delete(equipid:any){
    console.log(equipid)
    return this.httpClient.delete(this.url + '?equipid=' + equipid)
  }
}
