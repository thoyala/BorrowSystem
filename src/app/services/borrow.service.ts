import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  url='http://localhost/borrowsystem_api/borrow.php'

  constructor(private httpClient: HttpClient) { }

  post(data:any){
    return this.httpClient.post(this.url, data)
  }
}
