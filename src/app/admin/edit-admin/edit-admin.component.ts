import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { UploadAdminService } from 'src/app/services/upload-admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  constructor(private loginService:LoginService,
    private adminService:AdminService,
    private uploadAdminService: UploadAdminService,
    private router:Router
    ){}

  adminData: any
  ngOnInit(): void {
    this.adminData=this.loginService.loginData
    this.adminData.newpassword=''
  }

  formData = new FormData
  onEditAdmin(){
    // console.log(this.adminData)
    this.adminService.put(this.adminData) //ใช้ update ข้อมูลใน tbstaff
      .subscribe(result => {
        // console.log(result)
        if(this.hasFile){ //เข็คว่าถ้ามีการเลือก file ให้ upload to server
          this.formData.append("picture",this.file)
          this.uploadAdminService.upload(this.formData)
          .subscribe(result=>{
            console.log(result)
              this.adminData.picture=this.file.name
          })
        }
      })
      this.router.navigate(['admin'])
  }

  hasFile=false
    file!: File
    onSelectFile(event:any){
      if(event.target.files.length>0){
        this.hasFile=true
        this.file=event.target.files[0]
        this.adminData.newpicture=this.file.name
        console.log(this.adminData)
      }
    }
}
