import { useHistory } from 'react-router-dom';
import { addData } from '../../api/data.service'; 
import BookForm from "../../components/book-form/book-form.component"

import './add-book-page.styles.css';


const AddBookPage = () => {
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
    })
  }

  return(
    <div className="add-book-container">
      <BookForm headline="Add new book" submitFunction={addBookData} ><button>Add new book</button></BookForm>
    </div>
  )
}

export default AddBookPage;