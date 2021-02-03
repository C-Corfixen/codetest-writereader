import { useState } from 'react';

const BookForm = ({headline, submitFunction, ...otherProps}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunction({title, author, pages});
  }

  return(
    <div>
      <h2>{ headline }</h2>
      <form onSubmit={handleSubmit}>

        <div className="input-field">
          <label htmlFor="title">Book title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="author">Book author:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>

        <div className="input-field">
          <label htmlFor="pages">Number of pages:</label>
          <input type="number" id="pages" value={pages} onChange={(e) => setPages(e.target.value)} />
        </div>        

        { otherProps.children }
      </form>
    </div>
  )
}

export default BookForm;