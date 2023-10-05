import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {path:"", redirectTo:"welcome", pathMatch:"full"},
  {path: "welcome", component:WelcomeComponent},
  {path: "loginpage", component: LoginComponent},
  {path: "question", component: QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
