import { Injectable } from '@nestjs/common';
import { BookEntity } from './entity/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddBookArgs } from './args/addBook.args';
import { UpdateBookArgs } from './args/updateBook.args';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    public readonly bookRepo: Repository<BookEntity>,
  ) {}

  async findAllBooks(): Promise<BookEntity[]> {
    let book = await this.bookRepo.find();
    return book;
  }

  async findBookById(id: number): Promise<BookEntity> {
    let book = await this.bookRepo.findOne({ where: { id: id } });
    return book;
  }

  async deleteBook(id: number): Promise<String> {
    await this.bookRepo.delete(id);
    return 'Book has been deleted';
  }

  async addBook(addBookArgs: AddBookArgs): Promise<String> {
    let book: BookEntity = new BookEntity();
    book.title = addBookArgs.title;
    book.price = addBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has been added successfully';
  }

  async updateBook(updateBookArgs: UpdateBookArgs): Promise<String> {
    let book: BookEntity = await this.bookRepo.findOne({
      where: { id: updateBookArgs.id },
    });
    book.title = updateBookArgs.title;
    book.price = updateBookArgs.price;
    await this.bookRepo.save(book);
    return 'Book has been updated  successfully';
  }
}
