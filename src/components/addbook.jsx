
//This is the C in CRUD. This adds a new book to the list.
function Add({form}){
  let myBooks = JSON.parse(localStorage.getItem("bookTable"))

  console.log("This is what is in book.", form)

  console.log(myBooks)
  
  myBooks.push(form)

  localStorage.getItem("bookTable", JSON.stringify(form))

  



return(
<></>
)


}
export default Add