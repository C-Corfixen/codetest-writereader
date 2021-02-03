import { useState, useEffect, Fragment } from 'react';

const BookForm = ({headline, submitFunction, bookData, ...otherProps}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');

  useEffect(() => {
    if(bookData) {
      setTitle(bookData.title);
      setAuthor(bookData.author);
      setPages(bookData.pages);
    }
  }, [bookData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFunction({title, author, pages});
  }

  return(
    <Fragment>
      <h2>{ headline }</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="title">Book title:</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="author">Book author:</label>
          <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="pages">Number of pages:</label>
          <input type="number" className="form-control" id="pages" value={pages} onChange={(e) => setPages(e.target.value)} />
        </div>        

        { otherProps.children }
      </form>
    </Fragment>
  )
}

export default BookForm;