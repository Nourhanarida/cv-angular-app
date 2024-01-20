import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Shared/header/header.component';
import { IndexComponent } from './container/index/index.component';
import { AboutUsComponent } from './container/about-us/about-us.component';
import { ServicesComponent } from './container/services/services.component';
import { ContactUsComponent } from './container/contact-us/contact-us.component';
import { ResumeComponent } from './container/resume/resume.component';
import { PortfolioComponent } from './container/portfolio/portfolio.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    ResumeComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage : "en",
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '../assets/i18n/' ,'.json');
}
