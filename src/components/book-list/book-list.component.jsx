import { useState, useEffect } from 'react';

const BookList = () => {
  const [books, setBooks] = useState(false);

  useEffect(() => {

  }, []);

  return(
    <div className="book-list">
      { books && <p>Here is your books!</p> }
      { !books && <p>You have no books!</p> }
    </div>
  )
}

export default BookList;