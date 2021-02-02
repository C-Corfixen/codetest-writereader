import { useState } from 'react';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({title, author, pages});
  }

  return(
    <div>
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Book title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="author">Book author:</label>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <label htmlFor="pages">Number of pages:</label>
        <input type="number" id="pages" value={pages} onChange={(e) => setPages(e.target.value)} />

        <button>Add book!</button>
      </form>
    </div>
  )
}

export default BookForm;