import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Users = new Users()
  confirmPassword:string
  isUserRegister=false
  mismatch = false
  registerMessage ='User Registered Successful. Please navigate Login page.'
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log("uses: ",this.user)
      this.userService.registerUser(this.user).subscribe(
        data=>{
          console.log("data: ",data)
          this.isUserRegister = true
        }
      )
  }

  onPasswordChange(){

    if(this.confirmPassword== this.user.password){
      this.mismatch = false
    }
    else{
      this.mismatch = true
    }
    // if(this.confirm_password.value==this.password.value){
    //     this.confirm_password.setErrors(null)
    // }
    // else{
    //   this.confirm_password.setErrors({mismatch:true})
    // }
  }

  // get password(): AbstractControl {
  //   return this.form.controls['password'];
  // }

  // get confirm_password(): AbstractControl{
  //   return this.form.controls['confirm_password'];
  // }
}
