import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private getUrl:string = "http://localhost:8080/api/v1"
  private getUrl:string = "http://valdbinstance.chqc9b8iqink.us-east-1.rds.amazonaws.com/api/v1"
  constructor(private httpClient:HttpClient) { }

  registerUser(user:Users){
    return this.httpClient.post<Users>(`${this.getUrl}`,user)
  }

}
