import { Component, OnInit } from '@angular/core';
import { EquipService } from 'src/app/services/equip.service';
import { UploadEquipService } from 'src/app/services/upload-equip.service';
declare const $:any;

@Component({
  selector: 'app-crud-equip',
  templateUrl: './crud-equip.component.html',
  styleUrls: ['./crud-equip.component.css']
})
export class CrudEquipComponent implements OnInit{
  constructor(private equipService:EquipService,
    private uploadEquipService: UploadEquipService) {}

  model={
    name:'',
    detail:'',
    qty:'',
    picture:''
  }
  data: any

  ngOnInit(): void {
    this.equipService.get() //แสดงข้อมูล
      .subscribe(result=>{
        this.data=result
      })
  }

  formData = new FormData()
  onSave(){ // เพิ่มข้อมูล
    //ปิด Modal
    $('#addEquipModal').modal('hide')
    this.equipService.post(this.model)
      .subscribe(result=>{
        console.log(result)
        if(this.hasFile){
          this.formData.append("picture",this.file)
          this.uploadEquipService.upload(this.formData)
            .subscribe(result=>{
              console.log(result)
            })
        }
        this.ngOnInit() //เรียกข้อมูลแสดงผล
      })
  }

  hasFile=false
  file!: File
  onSelectFile(event: any){
    if(event.target.files.length>0){
      this.hasFile=true
      this.file=event.target.files[0]
      this.model.picture=this.file.name
    }
  }
}
