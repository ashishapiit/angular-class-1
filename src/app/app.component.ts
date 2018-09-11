import { Component, ViewChild } from '@angular/core';
import { AppHeader } from './app-header/app-header.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
<h1>Hello</h1>
<app-header #header [companyname] ="title" [product] = "products" (eventClick) = "handleEventClicked($event)" ></app-header>
<button (click) = "header.callHeader()">{{header.name}}</button>
<app-navbar></app-navbar>
<app-content></app-content>
<app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Company Training';
  name = '';
  products = ['Product1', 'Product2', '', 'product4'];
  
  @ViewChild(AppHeader)
  private appHeaderObj: AppHeader;

  handleEventClicked(name){
    this.appHeaderObj.callHeader();
    console.log("Event Clicked:", name )
  }

}
