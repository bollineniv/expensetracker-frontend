import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateUser } from '../models/authenticate-user';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor(private authenticateService: AuthenticateService,
              ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("inside interceptor: ",this.authenticateService.createBasicAuthHeader())
    // console.log("inside : ",this.authenticate.email)
    let basicAuthHeader = this.authenticateService.createBasicAuthHeader()

    request = request.clone(
      {
        setHeaders : {
          Authorization : basicAuthHeader
        }
        
      }
    )
    
    return next.handle(request);
  }
}
