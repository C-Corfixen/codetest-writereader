import { useState, useEffect } from 'react';

import { FetchData } from '../../api/data.service';
import BookCard from '../book-card/book-card.component';

const BookList = () => {
  const [books, setBooks] = useState(false);

  useEffect(() => {
    //Fake api call
    FetchData('codetest-bookdata')
    .then((response) => {
      console.log(response);
      setBooks(response.data.books);
    });
  }, []);

  return(
    <div className="book-list">
      { books && books.map((book, i) => <BookCard key={i} book={book} />)}
      { !books && <p>You have no books!</p> }
    </div>
  )
}

export default BookList;