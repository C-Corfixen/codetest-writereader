import { useHistory } from 'react-router-dom';
import { addData } from '../../api/data.service'; 
import BookForm from "../../components/book-form/book-form.component"

import './add-book-page.styles.css';


const AddBookPage = ({loggedIn}) => {
  const history = useHistory();

  const addBookData = (bookFormData) => {
    addData({'url': 'codetest-bookdata', 'data': bookFormData})
    .then((response) => {
      if(response === 'item added') {
        history.push('/');
      } 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return(
    <div className="col-sm-12 col-md-6">
      { loggedIn && <BookForm headline="Add new book" submitFunction={addBookData} ><button>Add new book</button></BookForm> }
      { !loggedIn && <p>Please login to add books</p> }
    </div>
  )
}

export default AddBookPage;