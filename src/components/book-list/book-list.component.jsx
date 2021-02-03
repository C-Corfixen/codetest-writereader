import { useEffect } from 'react';
import useBookData from '../../hooks/useBookData';

import BookCard from '../book-card/book-card.component';

const BookList = () => {
  const { data: books, error, changeData } = useBookData('codetest-bookdata');

  const deleteBook = (id) => {
    console.log('delete book!');
    const filteredData = books.filter(book => book.id !== id);
    const updatedData = [...filteredData];
    changeData(updatedData);
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