import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit{
  constructor(private userService: UserService){

  }
  data: any
  ngOnInit(): void {
    // ดึงข้อมูลจากตาราง tbuser
    this.userService.get()
      .subscribe(result=>{
        this.data=result
        console.log(this.data)
      })
  }
}
