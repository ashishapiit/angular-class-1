import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";
import { Joke } from "src/app/Joke/Joke";

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
  <img [src] = "image | default: '/assets/avatar.png' "  />
  <h4 class="card-title">{{data.setup | uppercase}}</h4>
  <p class="card-text"
     [hidden]="data.hide">
     <ng-content select="div"></ng-content>
     </p>
  <ng-content select="h1"></ng-content>
  <a (click)="data.toggle()"
     class="btn btn-warning">Tell Me
  </a>
</div>
`
})
export class JokeComponent implements OnChanges{
  @Input('joke') data: Joke;
  @Input() data2: string;
  public newdata = "childdata";
  image = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  constructor() {
    console.log(`new - data is ${this.data}`);
  }


  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
