import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { PostsComponent } from './posts/posts.component';
import { ShowPostComponent } from './posts/show-post/show-post.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    UserInfoComponent,
    PostsComponent,
    ShowPostComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
