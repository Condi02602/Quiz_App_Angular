import { Component } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  public name: string = "";
  public email: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 10;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  progress: string="0";
  isQuizCompleted: Boolean=false;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.name = localStorage.getItem('name')!;
    this.email = localStorage.getItem('email')!;
    this.getAllQuestion();
    this.startCounter();
  }
  getAllQuestion() {
    this.questionService.getQuestionJson().subscribe(res => {
      this.questionList = res.questions;
    })
  }

  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points+= 10;
      this.correctAnswer++;
      setTimeout(()=> {
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      },1000);

    }
    else {
      setTimeout(()=>{
      this.incorrectAnswer--;
      this.currentQuestion++;
      this.resetCounter();
      this.getProgressPercent();
      },1000);
      // this.points-= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter == 0) {
        this.currentQuestion++;
        // this.points--;
        this.counter=10;
      }
    })
    setTimeout(() => {
      this.interval$.unsubscribe()
    }, 180000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter=10;
    this.startCounter();
  }
  resetquiz(){
    this.resetCounter();
    this.getAllQuestion();
    this.points=0;
    this.counter=10;
    this.currentQuestion=0;
    this.progress="0";
  }
  getProgressPercent(){
    this.progress = ((this.currentQuestion/ this.questionList.length)*100).toString();
    return this.progress;
  }
}
