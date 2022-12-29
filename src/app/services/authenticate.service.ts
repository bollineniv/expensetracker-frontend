import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  testuser:string = "testuser"
  testpass:string = "123456"
  constructor() { }

  userAuthencation(username:string,password:string){
    if(username === this.testuser && password === this.testpass){
      sessionStorage.setItem("userAuthenticated",username)
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("userAuthenticated")
    return !(user == null)
  }

  logout(){
    sessionStorage.removeItem("userAuthenticated")
  }
}
