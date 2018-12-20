import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCX6ZLZ059FrpcrxGmTgb3dBE0akKLV4ac",
      authDomain: "course-project-recipe-book.firebaseapp.com"
    });
  }
}
