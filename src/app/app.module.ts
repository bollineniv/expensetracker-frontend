import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

const routers: Routes = [
  {path:'allExpenses', component:ListExpenseComponent},
  {path:'addExpense', component:AddExpenseComponent},
  {path:'editExpense/:id', component:AddExpenseComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome/:username', component:WelcomeComponent},
  {path:'deleteExpense/:id', redirectTo:'/allExpenses'},
  {path:'', redirectTo:'/allExpenses', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent,
    LoginComponent,
    NavigationBarComponent
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
