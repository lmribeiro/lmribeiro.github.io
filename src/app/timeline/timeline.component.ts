import {Component, Input, OnInit} from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {
  @Input() resource;
  items = [];

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.items = this.firebaseService.getData(this.resource);
  }

}
