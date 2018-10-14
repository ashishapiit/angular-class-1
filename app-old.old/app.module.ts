import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { JokeComponent } from './Joke/joke.component';
import { JokeListComponent } from './Joke/joke-list.component';
import { JokeFormComponent } from './Joke/JokeForm.component';
import { JokeAppComponent } from './joke-app.component';
import { CardHoverDirective } from './shared/card-hover.directive';
import { DefaultPipe } from './shared/default-image.pipe';

// import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
// import { AppNavbar } from './app-navbar/app-navbar.component';
// import { AppFooter } from './app-footer/app-footer.component';
// import { AppContent } from './app-content/app-content.component';
// import { AppHeader } from './app-header/app-header.component';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // GuessTheNumberComponent,
    // AppNavbar,
    // AppFooter,
    // AppContent,
    // AppHeader,
    JokeComponent,
    JokeAppComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [JokeAppComponent]
})
export class AppModule { }
