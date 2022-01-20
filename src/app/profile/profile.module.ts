import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ParallaxDirective } from './parallax.directive';



@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferenceComponent,
    SkillsComponent,
    ParallaxDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SnotifyModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
  ]

})
export class ProfileModule { }
