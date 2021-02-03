import { useEffect } from 'react';
import useBookData from '../../hooks/useBookData';

import BookCard from '../book-card/book-card.component';

const BookList = () => {
  const { data: books, error } = useBookData('codetest-bookdata');

  useEffect(() => {
    console.log(books);
  }, [books]);

  const deleteBook = () => {
    console.log('delete book!');
  }

  return(
    <div className="book-list">
      { books && books.map((book) => <BookCard key={book.id} deleteFunction={deleteBook} book={book} />)}
      { !books && <p>You have no books!</p> }
      { error && <p>{ error }</p> }
    </div>
  )
}

export default BookList;