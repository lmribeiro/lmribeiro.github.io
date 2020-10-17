import {Component, Input, OnInit} from '@angular/core';
import { FbService } from '../services/firebase/fb.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {
  @Input() resource;
  items = [];

  constructor(public fbService: FbService) { }

  ngOnInit(): void {
    this.items = this.fbService.getData(this.resource);
  }

}
