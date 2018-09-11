import { Component } from "@angular/core";
import { Joke } from "src/app/Joke/Joke";

@Component({
  selector: 'joke-list',
  template: `
<joke-form (jokeCreated)="addJoke($event)"></joke-form>
<joke-form (jokeCreated)="addJoke($event)"></joke-form>
<joke *ngFor="let j of jokes" [joke]="j" [data2] ="email">
  <div><strong>{{ j.punchline }}</strong></div>
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
  public email =  "ashish";
  constructor() {
    this.jokes = [
      new Joke("Some random text of joke and Joke main content", "Hello-me (Halloumi)"),
      new Joke("Some random text of joke and Joke main content 2", "Mask-a-pony (Mascarpone)"),
      new Joke("Some random text of joke and Joke main content 4", "I thought ‘That’s not very mature’"),
    ];
  }

  addJoke() {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteJoke() {
    this.jokes = []
  }
}
