import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { FormsModule } from '@angular/forms';

const routers: Routes = [
  {path:'allExpenses', component:ListExpenseComponent},
  {path:'addExpense', component:AddExpenseComponent},
  {path:'editExpense/:id', component:AddExpenseComponent},
  {path:'deleteExpense/:id', redirectTo:'/allExpenses'},
  {path:'', redirectTo:'/allExpenses', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
