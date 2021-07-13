import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz } from '../_models/quiz';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$= this.currentUserSource.asObservable();


  constructor(private http: HttpClient) { }
  quizData:Quiz = new Quiz();
  list:Quiz[] =[];

  

  login(model: any){
    return this.http.post(this.baseUrl+'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user)
        {
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl+ 'account/register', model).pipe(
      map((user: User) =>{
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }
  logout()
  {  
    const userJson =localStorage.removeItem('user');
    this.currentUserSource.next(undefined); 
  }
  
  // USERS
  
  postUser(){
    return this.http.post(this.baseUrl+'users',this.quizData);
  }
  postQuiz(){ 
    return this.http.post(this.baseUrl+'quiz',this.quizData);
  }

  getAllQuiz(){
    return this.http.get(this.baseUrl+'quiz');
  }
  deleteUser(user:User) {
    return this.http.get(`${this.baseUrl}/users/delete/${user}`);
  }

  // getQuiz(){
  //   this.http.get(this.baseUrl)
  //   .toPromise()
  //   .then(res=>this.list = res as Quiz[]);
  // }
}

