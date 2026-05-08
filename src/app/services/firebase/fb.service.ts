import {Injectable} from '@angular/core';
import * as firebaseNamespace from 'firebase/app';
import 'firebase/firestore';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  db: any = null;
  firebaseConfig = (environment as any).firebaseConfig || null;

  constructor() {
    const firebase: any = (firebaseNamespace as any).default || firebaseNamespace;

    if (!this.firebaseConfig || !this.firebaseConfig.projectId) {
      console.warn('Firebase config missing: skipping Firestore initialization.');
      return;
    }

    if (!firebase.apps || firebase.apps.length === 0) {
      firebase.initializeApp(this.firebaseConfig);
    }
    this.db = firebase.firestore();
  }

  /**
   * Get items
   * @param resource resource to query
   */
  getData(resource: string): any[] {
    const items: any[] = [];
    if (!this.db) {
      return items;
    }

    this.db.collection(resource).orderBy('position').get().then((data) => {
      data.forEach((doc) => {
        items.push(doc.data());
      });
    });

    return items;
  }

}
