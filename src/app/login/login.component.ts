import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: DatabaseService) {} // instance DatabaseService in constructor
  onLogin(f: NgForm) {
    var id;
    console.log(f.value); // { first: '', last: '' }
    this.service.emailLogin(f.value).subscribe((data) => {
      id = data;
      console.log(id);
    });
  }
  ngOnInit(): void {}
}
