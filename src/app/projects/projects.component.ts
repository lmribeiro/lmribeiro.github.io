import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase/firebase.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  items = [];

  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.items = this.firebaseService.getData('project');
  }

}
