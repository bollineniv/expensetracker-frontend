import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  username = ''
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.username = this.activateRoute.snapshot.params['username']

  }

}
