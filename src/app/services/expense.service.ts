import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private getUrl:string = "http://localhost:8080/api/v1"



  constructor( private httpClient: HttpClient) { }

  getAllExpense(): Observable<Expense[]>{

    return this.httpClient.get<Expense[]>(this.getUrl+"/getAllExpense").pipe(
      map(response =>response)
    )
    
  }
}
