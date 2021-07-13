import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quizzes: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getAllQuiz(){
    this.http.get('https://localhost:5001/api/quiz').subscribe(quizzes => this.quizzes = quizzes);
  }

}
