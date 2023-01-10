import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateUser } from 'src/app/models/authenticate-user';
import { AuthenticateService } from 'src/app/services/authenticate.service';

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
  authentication:AuthenticateUser = new AuthenticateUser()
  testuser:string = "testuser"
  testpass:string = "123456"
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticate:AuthenticateService) { }

  ngOnInit(): void {
    this.authentication
  }

  authenticateUser(username:string,password:string) {
    console.log("test")
    if(this.authenticate.userAuthencation(username,password)){
      this.router.navigate(['welcome',username])
      this.message="Login works"
      this.invalidLogin = false
    }
    else{
      this.invalidLogin = true
    }
    
    }

    authenticateUserV2() {
      this.authenticate.userAuthenticationV2(this.authentication).subscribe(
        data=> {
          // this.authenticate.createBasicAuthHeader()
          console.log("login:: ",data.name)
          this.authenticate.setSeesionItem(data.name)
          this.router.navigate(['welcome',data.name]);
        }
      )

      
      }
}
