import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  constructor(private service: DatabaseService) {}

  user: any = {};
  name: string = 'teo';

  ngOnInit(): void {
    console.log('good');
    this.requestUserData();
  }

  requestUserData() {
    this.service.getUserInfo().subscribe((data) => {
      this.user = data;
      //this.user = data.userName;
      const obj = JSON.parse(JSON.stringify(data));
      this.name = obj.userName;
      console.log('good');
    });
  }
}
