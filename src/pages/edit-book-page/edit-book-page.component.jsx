import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { updateData } from '../../api/data.service';
import useBookData from '../../hooks/useBookData';

import BookForm from '../../components/book-form/book-form.component';

const EditBookPage = (props) => {
  const { data: books, error, changeData } = useBookData('codetest-bookdata');
  const [selectedBook, setSelectedBook] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(books) { 
      setSelectedBook(books.find(book => parseInt(book.id) === parseInt(props.match.params.id)));      
    }
  }, [books, props.match.params.id]);

  const editBookData = ({title, author, pages}) => {
    const filteredData = books.filter(book => parseInt(book.id) !== parseInt(selectedBook.id));
    const newData = [...filteredData, {title, author, pages, 'id': selectedBook.id}];

    updateData({'url': 'codetest-bookdata', 'data': newData})
    .then((response) => {
      if(response === 'items updated') {
        history.push('/');
      } 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return(
    <div className="edit-book-container">
      { selectedBook && <BookForm headline="Edit book" bookData={selectedBook} submitFunction={editBookData} ><button>Update book</button></BookForm> }
    </div>
  )
}

export default EditBookPage;