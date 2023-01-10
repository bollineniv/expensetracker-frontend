import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
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

  saveExpense(expense: Expense): Observable<Expense>{

    return this.httpClient.post<Expense>(this.getUrl+"/addExpense",expense)
  }

  getExpense(id: number): Observable<Expense>{

    return this.httpClient.get<Expense>(`${this.getUrl}/getExpense/${id}`).pipe(
      map(response=>response)
    )
    // return this.httpClient.get<Expense>(this.getUrl+"/getExpense/"+id).pipe(
    //   map(response =>response)
    // )
    
  }

  deleteExpense(id: number): Observable<any>{

    return this.httpClient.delete(`${this.getUrl}/deleteExpense/${id}`,{responseType: 'text'})
    // return this.httpClient.get<Expense>(this.getUrl+"/getExpense/"+id).pipe(
    //   map(response =>response)
    // )
    
  }

  getExpenseByCategory(category:string): Observable<Expense[]>{
    return this.httpClient.get<Expense[]>(`${this.getUrl}/expense/category?category=${category}`)
              .pipe(map(response=>response))
  }
}
