import {Component, OnInit} from '@angular/core';
import {FbService} from '../services/firebase/fb.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  items = [];

  constructor(public fbService: FbService) {
  }

  ngOnInit(): void {
    this.items = this.fbService.getData('project');
  }

}
