import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { QuizService } from 'src/app/service/quizService/quiz.service';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {




  constructor(){}

  ngOnInit(): void {
  }
 

}