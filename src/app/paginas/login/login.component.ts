import { Component, Injectable, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable()
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  } 

}
