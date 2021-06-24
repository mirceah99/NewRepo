import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [AppComponent, CoursesComponent, UserInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
