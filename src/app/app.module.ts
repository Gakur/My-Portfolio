import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxSpinnerModule } from 'node_modules/ngx-spinner';
import { ContactComponent } from './components/contact/contact.component';
import { SnotifyModule } from 'ng-snotify';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions =  {
  useHash: true,
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    SnotifyModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    // BrowserAnimationsModule,
    RouterModule.forRoot(routes, config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
