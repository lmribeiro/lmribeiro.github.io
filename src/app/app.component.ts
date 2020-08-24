import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'lribeiro';

  scroll(e: any, id: string): void {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

}
