import { useEffect } from 'react';
import useBookData from '../../hooks/useBookData';

import BookCard from '../book-card/book-card.component';

const BookList = () => {
  const { data: books, error } = useBookData('codetest-bookdata');

  useEffect(() => {
    console.log(books);
  }, [books]);

  return(
    <div className="book-list">
      { books && books.map((book, i) => <BookCard key={i} book={book} />)}
      { !books && <p>You have no books!</p> }
      { error && <p>{ error }</p> }
    </div>
  )
}

export default BookList;