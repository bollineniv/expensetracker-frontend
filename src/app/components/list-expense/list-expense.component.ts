import { Component, OnInit } from '@angular/core';
import { basename } from 'path';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  allExpenses: Expense[] = []
  public categoryEnum = Category
  enumKeys=Object.keys(this.categoryEnum);
  filters ={
    keyword: '',
    sortBy: 'Name',
    category:'Other'
  }
  constructor(private expenseService: ExpenseService,
              ) { }

  ngOnInit(): void {

    this.listExpenses()
  }

  deleteExpense(id:number){
    // this.addExpenseComponent.deleteExpense(id);
    this.expenseService.deleteExpense(id).subscribe(
      data =>{
        this.listExpenses()
      }
    )
  }

  listExpenses(){
    this.expenseService.getAllExpense().subscribe(
      // data => this.allExpenses = data
      data => this.allExpenses = this.filterExpenses(data)
    )
    console.log("category: ",this.filters.category)
  }

  filterExpenses(allexpenses: Expense[]){
    return allexpenses.filter((e)=> {
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a,b)=>{
      if(this.filters.sortBy ==='Name'){
        return a.expense.toLowerCase()<b.expense.toLowerCase()? -1:1
      }
      else if(this.filters.sortBy==='Amount'){
        return a.amount>b.amount? -1:1
      }
      else{
        return a.expense.toLowerCase()<b.expense.toLowerCase()? -1:1
      }
    })
  }

  getExpenseByCategory(category:string){
    this.expenseService.getExpenseByCategory(category).subscribe(
      data=>this.allExpenses=data
    )
  }

}
