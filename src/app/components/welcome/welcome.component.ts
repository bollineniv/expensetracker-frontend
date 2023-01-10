import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  
  username:any = ''
  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    
    console.log("params: ",this.activateRoute.snapshot.params['username'])
    this.username = this.activateRoute.snapshot.params['username']
    
  }

  addExpense(){
    this.router.navigate(['addExpense'])
  }

}
