import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  allExpenses: Expense[] = []
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {

    this.expenseService.getAllExpense().subscribe(
      data => this.allExpenses = data
    )
  }

}
