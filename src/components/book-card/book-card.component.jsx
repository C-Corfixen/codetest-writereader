import { Link } from 'react-router-dom';
import './book-card.styles.css';

const BookCard = ({book, deleteFunction}) => {
  const { title, author, pages, id } = book;

  return(
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{ title }</h2>
          <p className="card-text">
            Author: { author }<br />
            Pages: { pages }
          </p>
          <Link to={'editBook/'+id}><button>Edit book</button></Link>
          <button className="delete-button" onClick={() => deleteFunction(id)}>Delete book</button>
        </div>  
      </div>
    </div>     
  )
}

export default BookCard;