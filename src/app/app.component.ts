import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  class = 'on';
  tClass = 'nav-toggle';

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

  ngOnInit(): void {}
}
