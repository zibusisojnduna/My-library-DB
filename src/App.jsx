import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Read from './components/displayBook'
import BookCard from './components/bookcard'
import Form from './components/form'
import {add} from './components/addbook'

function App() {
  const [count, setCount] = useState(0)

  let bookTable = [
    {
      isbn:"978-3-16-148410-0",
      author:"Robert Muchamore",
      title:"Cherub:Divine Madness",
      no_of_pages:297,
      edition:"1st",
      publisher:"Penguin Books",
      price: "$19.99",
      designer:"https://th.bing.com/th/id/R.4e2c3b60dc38fc357be5dbfc5e4b5a7f?rik=gY2gCqSMQ1%2bg2A&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f23500000%2fCherub-book-covers-cherub-23585495-260-400.jpg&ehk=YudQjmYigq1nZHtK8BUQ2PUjftdBJwhNnx5CprWJXa4%3d&risl=&pid=ImgRaw&r=0",
      release_date:"23/09/2003",
    },

    {
      isbn:"891-4-56-761321-1",
      author:"J.R.R Tolkien",
      title:"Lord of the Rings",
      no_of_pages:1121,
      edition:"3rd",
      publisher:"Penguin Books",
      price:"$29.99",
      designer:"https://th.bing.com/th/id/OIP.TpPI9Xo84FEIODUn2tjjdgHaLK?rs=1&pid=ImgDetMain",
      release_date:"01/04/1999",
    },

    {
      isbn:"567-4-90-187419-2",
      author:"Mark Walden",
      title:"Harry Potter and The Prisoner Of Azkaban",
      no_of_pages:237,
      edition:"1st",
      publisher:"Macmillan Books",
      price:"$19.99",
      designer:"https://th.bing.com/th/id/OIP.UKNnYkPCKq6naPKpue0i0wHaME?rs=1&pid=ImgDetMain",
      release_date:"30/01/2011",
    }
  ]

localStorage.setItem("bookTable", JSON.stringify(bookTable))

  

  let bookList =[
    {

    }
  ]
  console.log(bookTable)

  return (
<section className='card' style={{backgroundColor:"lightgreen", height:"100%", width:"100%", display:"flex"}}>
<BookCard info={bookTable[0]}/>

<Form/>

</section>
  



 

  )
}

export default App
