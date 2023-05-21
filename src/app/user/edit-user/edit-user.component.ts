import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  constructor(private longinService: LoginService,
    private userService: UserService){}

  userData: any
  ngOnInit(): void {
    this.userData=this.longinService.loginData 
    this.userData.newpassword=''
  }

  onEdit(){
    console.log(this.userData)
    this.userService.put(this.userData)
      .subscribe(result=>{
        console.log(result)
      })
  }
}
