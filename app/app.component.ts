import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
    public loading: boolean = false;
    public loginBtn: string = 'login';
    public myObservable = new Subject<boolean>();

    constructor() {
      this.myObservable.subscribe(val => {
        this.loading = val;
        this.loginBtn = 'loged in';
        alert(this.loading)
      })
    }

    changeBtnTxt() {
      this.loginBtn = 'please wait';
      setTimeout(() => { // Only for demonstration purpose
         const val = (this.loading == true ? false : true);
         this.myObservable.next(val);
       }, 2000);
    }
}
