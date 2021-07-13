import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  
  quizModel: any = {};

  constructor(private accountService: AccountService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  setQuiz(){
    this.accountService.postQuiz().subscribe(response =>{
      console.log(response);
      this.cancel();
    }, error =>{
      console.log(error);
      this.toastr.error(error.error);
    })
  }

  cancel(){}


}
