import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'education',component:EducationComponent},
  {path:'projects' ,component:ProjectsComponent},
  {path:'skills' , component:SkillsComponent},
  {path:'about' ,component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
