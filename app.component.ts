import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'AngularQuizApp';
  // implements OnInit
  // constructor (private router: Router){
  // }
  // onSubmit(){
  //   this.router.navigateByUrl('./question');
  // }
  // ngOnInit() {
    
  // }
}

