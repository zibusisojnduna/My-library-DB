//This is the C in CRUD. This adds a new book to the list.
function Add({book}){
  let myBooks = JSON.parse(localStorage.getItem("bookTable"))

  console.log("This is what is in book.", book)

  console.log(myBooks)

myBooks.push(book)

console.log(myBooks)

localStorage.setItem("bookTable", JSON.stringify(myBooks))

return(
    <></>
)


}
export default Add