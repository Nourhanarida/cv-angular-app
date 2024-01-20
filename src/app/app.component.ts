import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'amrEbeid';

  constructor(private contexts: ChildrenOutletContexts) {}


   getRouteAnimationData() {
     return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
   }

  onDeactivate() {
    window.scrollTo(0,0);
  }

}
