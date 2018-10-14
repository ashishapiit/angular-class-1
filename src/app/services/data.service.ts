import { Injectable } from '@angular/core';
import { allReaders, allBooks } from '../data';
import { Reader } from '../models/reader';
import { Book } from '../models/book';

@Injectable()
export class DataService {
  mostPopularBook: Book = allBooks[0];

  constructor() { }
  getAllReaders(): Reader[]{
    return allReaders;
  }
  setMostPopularBook(popularBook:Book):void{
    this.mostPopularBook = popularBook;
  }
  getReaderById(Id:number):Reader{
    return allReaders.find(reader => reader.readerID === Id);
  }
  getAllBooks():Book[]{
    return allBooks;
  }
  getBookById(Id:number):Book{
    return allBooks.find(book => book.bookID === Id);
  }
}
