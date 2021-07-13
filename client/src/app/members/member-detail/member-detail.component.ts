import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  }

}
