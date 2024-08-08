//This is the R in CRUD. This displays the list of books.
import BookCard from "./bookcard";

const Read = ({bookList}) => {
   return(
      <div style={{display:"flex"}}>
         {bookList.map(item => (
            <BookCard key={item.isbn} book={item}/>
         ))}
      </div>
   )
}

export default Read