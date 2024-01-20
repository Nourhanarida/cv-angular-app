import { LocationStrategy } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   linkurl !: string;
   curentLang !: string;
   element : HTMLElement = document.getElementById('main') as HTMLElement;

  constructor(private url:LocationStrategy , private router: Router , public translate : TranslateService) {
    this.curentLang = sessionStorage.getItem('curentLang') || 'en';
    this.translate.use(this.curentLang);

    if(sessionStorage.getItem("curentLang") === null) {
      this.element.setAttribute("dir" , "en");
    } else {
      this.element.setAttribute("dir" , "" + sessionStorage.getItem("curentLang") +  "");
    }

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (this.url.path() === "/index") {
        this.linkurl = "/index";
      } else {
        this.linkurl = "";
      }
    });
  }

  changeCurentLang (lang:string ) {
    sessionStorage.setItem('curentLang' , lang);
    this.translate.use(lang);

    this.element.setAttribute("dir" , "" + sessionStorage.getItem("curentLang") +"" );
  }
}
