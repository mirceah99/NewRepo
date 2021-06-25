import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  constructor(private service: DatabaseService) {} // instance DatabaseService in constructor

  user: any = {};
  name: string = 'teo';

  ngOnInit(): void {
    console.log('good');
    this.requestUserData();
  }

  requestUserData() {
    // .subscribe() it is waiting for answer
    this.service.getUserInfo().subscribe((data) => {
      this.user = data;
      this.user = data.userName;
      console.log('good');
    });
  }
}
