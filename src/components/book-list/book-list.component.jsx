import { useState, useEffect } from 'react';

import { FetchData } from '../../api/data.service';

const BookList = () => {
  const [books, setBooks] = useState(false);

  useEffect(() => {
    //Fake api call
    FetchData()
    .then((response) => {
      console.log(response);
      setBooks(response.data);
    });
  }, []);

  return(
    <div className="book-list">
      { books && books.map((book, i) => (
        <div key={i}>{ book.title }</div>
      ))}
      { !books && <p>You have no books!</p> }
    </div>
  )
}

export default BookList;