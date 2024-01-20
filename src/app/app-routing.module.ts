import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './container/about-us/about-us.component';
import { ContactUsComponent } from './container/contact-us/contact-us.component';
import { IndexComponent } from './container/index/index.component';
import { PortfolioComponent } from './container/portfolio/portfolio.component';
import { ResumeComponent } from './container/resume/resume.component';
import { ServicesComponent } from './container/services/services.component';

const routes: Routes = [
  {path : '' , redirectTo  : 'index', pathMatch: 'full'},
  {path : 'index' , component : IndexComponent , data: { animation: 'index' }},
  {path : 'aboutUs' , component : AboutUsComponent , data: { animation: 'aboutUs' }},
  {path : 'services' , component : ServicesComponent , data: { animation: 'services' }},
  {path : 'resume' , component : ResumeComponent , data: { animation: 'resume' }},
  {path : 'portfolio' , component : PortfolioComponent , data: { animation: 'portfolio' }},
  {path : 'contactUs' , component : ContactUsComponent , data: { animation: 'contactUs' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
