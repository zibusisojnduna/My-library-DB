//This is the R in CRUD. This displays the list of books.
import BookCard from "./bookcard";

const Read = () => {

let myBooks = localStorage.getItem("bookTable")

let library = myBooks ? JSON.parse(myBooks) : []

console.log(library)

   return(
      <div style={{display:"flex"}}>
         {bookTable.map(item => (
            <BookCard key={item.isbn} book={item}/>
         ))}
      </div>
   )
}

export default Read