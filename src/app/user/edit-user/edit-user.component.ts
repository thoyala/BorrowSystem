import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UploadUserService } from 'src/app/services/upload-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  constructor(private longinService: LoginService,
    private userService: UserService,
    private uploadUserService: UploadUserService,
    private router:Router){}
    

  userData: any
  ngOnInit(): void {
    this.userData=this.longinService.loginData 
    this.userData.newpassword=''
  }
  formData = new FormData()
  onEdit(){
    // console.log(this.userData)
    this.userService.put(this.userData) //ใช้ insert ลงตาราง tbuser
      .subscribe(result=>{
        console.log(result)
        if(this.hasFile){ //เข็คว่าถ้ามีการเลือกไฟล์จะทำการ upload ไปที่ server
          this.formData.append("picture",this.file)
          this.uploadUserService.upload(this.formData) //ใช้ upload file
            .subscribe(result=>{
              console.log(result)
              this.userData.picture=this.file.name
            })
        }
      })
     this.router.navigate(['user']) 
  }
  hasFile=false
  file!: File
  onSelectFile(event: any){
    if(event.target.files.length>0){
      this.hasFile=true
      this.file=event.target.files[0]
      this.userData.newpicture=this.file.name
      console.log(this.userData)
    }
  }

}
