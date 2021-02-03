import { Link } from 'react-router-dom';
import './book-card.styles.css';

const BookCard = ({book, deleteFunction}) => {
  const { title, author, pages, id } = book;

  return(
    <div className="book-card">
      <h2>{ title }</h2>
      <p>Author: { author }</p>
      <p>Pages: { pages }</p>
      <Link to={'editBook/'+id}><button>Edit book</button></Link>
      <button onClick={deleteFunction}>Delete book</button>
    </div>
  )
}

export default BookCard;