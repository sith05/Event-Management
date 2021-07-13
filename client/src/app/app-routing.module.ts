import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './admin-home/create-question/create-question.component';
import { CreateQuizComponent } from './admin-home/create-quiz/create-quiz.component';
import { DeleteQuizComponent } from './admin-home/delete-quiz/delete-quiz.component';
import { EditQuizComponent } from './admin-home/edit-quiz/edit-quiz.component';
import { QuizDetailComponent } from './admin-home/quiz-detail/quiz-detail.component';
import { QuizMenuComponent } from './admin-home/quiz-menu/quiz-menu.component';
import { UserDetailComponent } from './admin-home/user-detail/user-detail.component';
import { UserListComponent } from './admin-home/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members-details', component: MemberDetailComponent},
      {path: 'quiz-menu', component: QuizMenuComponent},
      {path: 'create', component: CreateQuestionComponent},
      {path: 'create-quiz', component: CreateQuizComponent},
      {path: 'view-quiz', component: QuizDetailComponent},
      {path: 'edit-quiz', component: EditQuizComponent},
      {path: 'delete-quiz', component: DeleteQuizComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'edit-user', component: UserDetailComponent},
      {path: 'delete-user', component: UserListComponent},
      {path: 'lists', component: ListsComponent},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
