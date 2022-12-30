import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExceptionHandlerService {

  constructor() { }

  errorHandler(error: HttpErrorResponse){
    return new Error(error.message || "Server Error");
    
  }
}
