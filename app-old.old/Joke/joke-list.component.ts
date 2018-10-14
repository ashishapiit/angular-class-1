import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { Joke } from "src/app/Joke/Joke";
import { JokeComponent } from "./joke.component";

@Component({
  selector: 'joke-list',
  template: `
<joke-form (jokeCreated)="addJoke($event)"></joke-form>
<joke-form (jokeCreated)="addJoke($event)"></joke-form>
{{ ar | slice:1:3  }}
<h1 [card-hover]="color">View Jokes</h1>
<joke #header *ngFor="let j of jokes" [joke]="j" [data2] ="email">
  <div ><strong>{{ j.punchline }}</strong></div>
  <h1>{{ j.setup }}</h1>
</joke>
<button type="button"
        class="btn btn-success"
        (click)="addJoke()">Add Joke
</button>
<button type="button"
        class="btn btn-danger"
        (click)="deleteJoke()">Clear Jokes
</button>
  `
})
export class JokeListComponent {
  jokes: Joke[];
  public color = 'blue';
  public price = 100.2;
  public email =  "ashish";
  public date = new Date();
  public ar = [1,2,3,4,5,6,7];
  @ViewChild(JokeComponent) jokeContentChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl;
  constructor() {
    this.jokes = [
      new Joke("Some random text of joke and Joke main content", "Hello-me (Halloumi)"),
      new Joke("Some random text of joke and Joke main content 2", "Mask-a-pony (Mascarpone)"),
      new Joke("Some random text of joke and Joke main content 4", "I thought ‘That’s not very mature’"),
    ];

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(`ViewJokeChild ${this.jokeContentChild}`)
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log("Jokes", jokes);
  }
  addJoke() {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteJoke() {
    this.jokes = []
  }

}
