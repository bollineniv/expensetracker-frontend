import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  username = ''
  constructor(private activateRoute: ActivatedRoute,
              public authenticate: AuthenticateService) { }

  ngOnInit(): void {

    this.username = this.activateRoute.snapshot.params['username']
    // this.username = this.activateRoute.snapshot.params['username']
    console.log("username: ",this.username)
    // const uname= this.activateRoute.paramMap['username']
    // console.log("uname: ",uname)
  }

}
