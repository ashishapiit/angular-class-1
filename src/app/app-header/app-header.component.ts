import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader{
  @Input() companyname: string;
  @Output() eventClick = new EventEmitter();

  person = { name: "My Name", email : "email@email.com"};
  name: string = "Ashish";
  private _product = [];
  @Input()
  set product(product: any){
    console.log('set product', product);
    this._product = product;
  }
  get product(): any{
    console.log("Get product");
    return this._product
  }
  handleClick(){
    this.name = "hello";
    this.eventClick.emit(this.person);
    console.log("clicked");
  }
  callHeader(){
    console.log("method from header component");
  }
}
