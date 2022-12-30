import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public categoryEnum = Category
  enumKeys=Object.keys(this.categoryEnum);
  expense: Expense = new Expense();
  constructor(private expenseservice: ExpenseService,
                private router:Router,
                private actvatedRoute: ActivatedRoute) {
          this.enumKeys=Object.keys(this.categoryEnum)
                 }

  ngOnInit(): void {
    const isIdAvailable = this.actvatedRoute.snapshot.paramMap.has('id')
    if(isIdAvailable){
      const id = this.actvatedRoute.snapshot.paramMap.get('id')
      this.expenseservice.getExpense(Number(id)).subscribe(
        data => this.expense = data
      )
    }
  }

  saveExpense(){
    if(this.expense.category==null){
      this.expense.category="Other"
    }
    this.expenseservice.saveExpense(this.expense).subscribe(
      data=>{
        console.log("response: ",data)
        this.router.navigateByUrl("/allExpenses")
      } 
    )
  }
  
  deleteExpense(id:number){

    this.expenseservice.deleteExpense(id).subscribe(
      data =>{
        console.log("Deleted Response: ",data)
        this.router.navigateByUrl('/allExpenses')
      }
    )
  }

  cancel(){
    this.router.navigate(['allExpenses'])
  }
}
