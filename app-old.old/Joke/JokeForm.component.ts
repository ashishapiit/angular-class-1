import { Component, ViewEncapsulation, EventEmitter, Output } from "@angular/core";
import { Joke } from "src/app/Joke/Joke";

@Component({
  selector: 'joke-form',
  templateUrl: 'joke-form.component.html',
  styleUrls: [
    'joke-form.component.css'
  ],
  //encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  //encapsulation: ViewEncapsulation.None

})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
