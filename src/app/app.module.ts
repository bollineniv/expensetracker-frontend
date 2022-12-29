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
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';

const routers: Routes = [
  {path:'login', component:LoginComponent},
  {path:'welcome/:username', component:WelcomeComponent, canActivate:[RouteGuardService]},
  // {path:'welcome', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'allExpenses', component:ListExpenseComponent, canActivate:[RouteGuardService]},
  {path:'addExpense', component:AddExpenseComponent, canActivate:[RouteGuardService]},
  {path:'editExpense/:id', component:AddExpenseComponent, canActivate:[RouteGuardService]},
  // {path:'deleteExpense/:id', redirectTo:'/allExpenses'},
  {path:'deleteExpense/:id', component:AddExpenseComponent},
  {path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'*', redirectTo:'/login', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpenseComponent,
    LoginComponent,
    NavigationBarComponent,
    WelcomeComponent,
    FooterComponent,
    LogoutComponent
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
