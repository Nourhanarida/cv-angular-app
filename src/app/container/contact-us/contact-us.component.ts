import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  images: string[] = [];
  constructor() {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

  ngOnInit(): void {
  }

}
