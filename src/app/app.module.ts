import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectsComponent } from './projects/projects.component';

// Services
import { FbService } from './services/firebase/fb.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TimelineComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
