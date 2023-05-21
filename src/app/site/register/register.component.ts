import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UploadUserService } from 'src/app/services/upload-user.service';
import { UserService } from 'src/app/services/user.service';
declare const $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // name=''
  // address=''
  // telephone=''
  // username=''
  // password=''
  // สร้างตัวแปร ob
  model = {
    name:'',
    address:'',
    telephone:'',
    username:'',
    password:'',
    picture:''
  }

  constructor (private userService:UserService,
    private uploadUserService: UploadUserService){}
  data: any
  onRegister(){
    // ปิด RegisterModal
      $('#registerModal').modal('hide')
    //เรียก api เพื่อ insert user
    this.userService.post(this.model)
      .subscribe(result=>{
        this.data=result
        alert(this.data.status)
        if(this.hasFile){
          this.formData.append("picture",this.file)
          this.uploadUserService.upload(this.formData)
          .subscribe(result=>{
            this.data=result
            alert(this.data.status)
          })
        }
      })
  }
  hasFile=false;
  file!: File;
  formData = new FormData();

  onFileSelect(event: any){
    //console.log(event.target.files[0].name)
    // ตรวจสอบว่ามีการเลือกภาพหรือไม่
    if (event.target.files.length > 0){
      this.file = event.target.files[0];
      this.hasFile=true
      this.model.picture=event.target.files[0].name
    
    }
  }
}
