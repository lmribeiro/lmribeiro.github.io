import {Component, HostListener, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  class = 'on';
  tClass = 'nav-toggle';
  db = null;
  firebaseConfig = {
    apiKey: 'AIzaSyCEQEiuAhXViTa0q-gXFSUkuJyEkdM0Iaw',
    authDomain: 'lribeiro-js-org.firebaseapp.com',
    databaseURL: 'https://lribeiro-js-org.firebaseio.com',
    projectId: 'lribeiro-js-org',
    storageBucket: 'lribeiro-js-org.appspot.com',
    messagingSenderId: '29802766899',
    appId: '1:29802766899:web:7a5783a6434e194da03946',
    measurementId: 'G-7XHNTFSH45'
  };
  educations = [];
  experiences = [];

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    this.class = 'on';
    this.tClass = 'nav-toggle';
    this.changeMenu();
  }

  scroll(e: any, id: string): void {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

  toggleClass(e: any): void {
    e.preventDefault();
    if (this.class === 'on') {
      this.class = 'of';
      this.tClass = 'nav-toggle active';
    } else {
      this.class = 'on';
      this.tClass = 'nav-toggle';
    }
    this.changeMenu();
  }

  changeMenu(): void {
    document.getElementsByTagName('body')[0].setAttribute('class', this.class);
  }

  ngOnInit(): void {
    // Initialize Cloud Firestore through Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(this.firebaseConfig);
    }
    this.db = firebase.firestore();

    this.db.collection('education').orderBy('position').get().then((data) => {
      data.forEach((doc) => {
        this.educations.push(doc.data());
      });
    });

    this.db.collection('experience').orderBy('position').get().then((data) => {
      data.forEach((doc) => {
        this.experiences.push(doc.data());
      });
    });
  }
}
