const BookCard = ({book}) => {
  const { title, author, pages } = book;

  return(
    <div>
      <p>{ title }</p>
      <p>{ author }</p>
      <p>{ pages }</p>
    </div>
  )
}

export default BookCard;