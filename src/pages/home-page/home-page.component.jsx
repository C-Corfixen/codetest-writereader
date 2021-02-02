import BookList from '../../components/book-list/book-list.component';
import './home-page.styles.css';

const HomePage = ({loggedIn}) => {
  return(
    <div className="home-page-container">
      { !loggedIn && (
        <p>Please login to view your books</p>
      )}
      { loggedIn && (
        <BookList />
      )}
    </div>
  )
}

export default HomePage;