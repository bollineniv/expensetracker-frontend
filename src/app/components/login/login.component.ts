import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message:string ='Invalid Login'
  invalidLogin = false
  login={
    username: "",
    password: ""
  }

  testuser:string = "testuser"
  testpass:string = "123456"
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  authenticateUser(username:string,password:string) {
    
    if(username === this.testuser && password === this.testpass){
      this.router.navigate(['welcome',username])
      this.message="Login works"
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
    
    }
}
