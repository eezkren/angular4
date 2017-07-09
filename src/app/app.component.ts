import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyBiG7y7uP9qnXnRAO5N_-GSH0Wn4BrGs1w',
      authDomain: 'ng-recipe-book-df3e9.firebaseapp.com'
    });
  }

}
