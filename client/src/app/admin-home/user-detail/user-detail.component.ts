import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  }
  editUser(){
    
  }

}
