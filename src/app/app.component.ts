import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  class = 'on';

  @HostListener('window:scroll', ['$event'])
  checkScroll(): void {
    this.class = 'on';
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
    } else {
      this.class = 'on';
    }
    this.changeMenu();
  }

  changeMenu(): void {
    document.getElementsByTagName('body')[0].setAttribute('class', this.class);
  }

}
