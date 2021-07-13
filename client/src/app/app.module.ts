import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginPageComponent } from './Login/login-page/login-page.component';
import { UserComponent } from './User/user/user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreateQuestionComponent } from './admin-home/create-question/create-question.component';
import { CreateQuizComponent } from './admin-home/create-quiz/create-quiz.component';
import { CreateUserComponent } from './admin-home/create-user/create-user.component';
import { ListQuestionComponent } from './admin-home/list-question/list-question.component';
import { McqListComponent } from './admin-home/mcq-list/mcq-list.component';
import { McqQuizComponent } from './admin-home/mcq-quiz/mcq-quiz.component';
import { McqDetailsComponent } from './admin-home/mcq-details/mcq-details.component';
import { QuizDetailComponent } from './admin-home/quiz-detail/quiz-detail.component';
import { UserDetailComponent } from './admin-home/user-detail/user-detail.component';
import { UserListComponent } from './admin-home/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './_modules/shared.module';
import { QuizMenuComponent } from './admin-home/quiz-menu/quiz-menu.component';
import { EditQuizComponent } from './admin-home/edit-quiz/edit-quiz.component';
import { DeleteQuizComponent } from './admin-home/delete-quiz/delete-quiz.component';
import { AdminPanelComponent } from './admin-home/admin-panel/admin-panel.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginPageComponent,
    UserComponent,
    AdminHomeComponent,
    CreateQuestionComponent,
    CreateQuizComponent,
    CreateUserComponent,
    ListQuestionComponent,
    McqListComponent,
    McqQuizComponent,
    McqDetailsComponent,
    QuizDetailComponent,
    UserDetailComponent,
    UserListComponent,
    HomeComponent,
    ResultComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    QuizMenuComponent,
    EditQuizComponent,
    DeleteQuizComponent,
    AdminPanelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
