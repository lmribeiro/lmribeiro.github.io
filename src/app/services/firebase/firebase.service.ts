import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db = null;
  firebaseConfig = {};

  constructor() {
    // Initialize Cloud Firestore through Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp(this.firebaseConfig);
    }

    this.db = firebase.firestore();
  }

  /**
   * Get items
   * @param resource resource to query
   */
  getData(resource: string): any[] {
    const items = [];
    this.db.collection(resource).orderBy('position').get().then((data) => {
      data.forEach((doc) => {
        items.push(doc.data());
      });
    });
    return items;
  }

}
