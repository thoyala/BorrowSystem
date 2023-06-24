import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadUserService } from 'src/app/services/upload-user.service';
import { UserService } from 'src/app/services/user.service';
declare const $: any;

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit{
  constructor(private userService: UserService,
    private uploadUserService: UploadUserService,
    private router:Router){}
 
  model = {
    name: '',
    address: '',
    telephone: '',
    username: '',
    password: '',
    picture: '',
    userid: ''
  }
  data: any
  oldpicture = ''

  onEdit(item:any){
    this.model=item
    this.oldpicture=this.model.picture
    console.log(this.data)
    $('#editEmployeeModal').modal('show')
  }

  ngOnInit(): void {
    // ดึงข้อมูลจากตาราง tbuser
    this.userService.get()
      .subscribe(result=>{
        this.data=result
        console.log(this.data)
      })
  }

  formData = new FormData()
  onSave(){ //เพิ่มข้อมูล
    //ปิด Modal
    $('#addEmployeeModal').modal('hide')
    this.userService.post(this.model)
      .subscribe(result => {
        console.log(result)
        if(this.hasFile){
          this.formData.append("picture",this.file)
          this.uploadUserService.upload(this.formData)
            .subscribe(result=>{
              console.log(result)
            })
        }
        this.ngOnInit() //เรียกข้อมูลแสดงผล
      })
      this.router.navigate(['admin/crud-user'])
  }

  hasFile = false
  file!: File
  onSelectFile(event:any){
    if(event.target.files.length>0){
      this.hasFile=true
      this.file=event.target.files[0]
      this.model.picture=this.file.name
    }
  }

  onEditEmployee(){
    console.log(this.model)
    this.userService.put(this.model)
      .subscribe(result=>{
        console.log(result)
        this.ngOnInit()
      })
      this.router.navigate(['admin/crud-user'])
  }

  onDelete(item:any){
    this.model=item
    $('#deleteEmployeeModal').modal('show')
  }

  onDeleteEmployee(){
    $('#deleteEmployeeModal').modal('hide')
    this.userService.delete(this.model.userid)
      .subscribe(result=>{
        console.log(result)
        this.ngOnInit()
      })
  }
}
