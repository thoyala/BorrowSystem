import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadAdminService {
  url= 'http://localhost/borrowsystem_api/upload_admin.php'

  constructor(private httpClient: HttpClient) { }

  upload(data:any){
    return this.httpClient.post(this.url, data)
  }
}
