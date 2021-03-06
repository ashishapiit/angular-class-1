import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';
import { DataService } from '../services/data.service';




@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute, private dataService:DataService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = this.dataService.getBookById(bookID);
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
    console.warn('Setting most popular book not yet implemented.');
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
