import { HttpClient } from '@angular/common/http';
import { ConditionalExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthenticateUser } from '../models/authenticate-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  testuser:string = "testuser"
  testpass:string = "123456"

  // private getUrl:string = "http://localhost:8080/api/v1"
  private getUrl:string = "http://Trackerapi-env.eba-jqcpttwg.us-east-1.elasticbeanstalk.com/api/v1"
  
  // authentication:{
  //   username:string,
  //   password:string
  // }
  public authentication1:AuthenticateUser = new AuthenticateUser()
  constructor(private httpClient:HttpClient) { }

  userAuthencation(username:string,password:string){
    console.log("username", username)
    console.log("password:", password)
    if(username === this.testuser && password === this.testpass){
      console.log("test2")
      sessionStorage.setItem("userAuthenticated",username)
      return true
    }
    console.log("test4")
    return false
  }

  userAuthenticationV2(authentication:AuthenticateUser):Observable<any>{
    this.authentication1 = authentication
    console.log("username: ",authentication)
    // console.log("email: ",authentication.email)
    let header = this.createBasicAuthHeader()
    console.log("header: ",header)
    return this.httpClient.post<AuthenticateUser>(`${this.getUrl}/loginV2`,authentication,{headers:{
      authorization: this.createBasicAuthHeader()
    }})
    .pipe(
      map(response=>response)
    )
  }

  createBasicAuthHeader(){

    let basicAuthHeader = 'Basic '+window.btoa(this.authentication1.email+':'+this.authentication1.password)
    console.log("header: ",basicAuthHeader)
    return basicAuthHeader
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("userAuthenticated")
    // console.log("userAuthenticated",user)
    return !(user == null)
  }

  setSeesionItem(username:string){
    sessionStorage.setItem("userAuthenticated",username)
  }
  getUsername(){
    const sessionItem = sessionStorage.getItem("userAuthenticated")
    if(sessionItem !=null){
      return sessionItem
    }
    return "error"
  }
  logout(){
    sessionStorage.removeItem("userAuthenticated")
  }
}
