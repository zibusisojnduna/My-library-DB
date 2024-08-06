import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './components/addbook'
import Read from './components/displayBook'
import Update from './components/updatebook'
import Delete from './components/deletebook'
import BookCard from './components/bookcard'
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
      designer:"./assets/Divine_Madness_cover.jpg",
      release_date:"23/09/2003",
    },

    {
      isbn:"891-4-56-761321-1",
      title:"Lord of the Rings",
      no_of_pages:1121,
      edition:"3rd",
      publisher:"Penguin Books",
      price:"$29.99",
      designer:"./src/assets/lotr.jpg",
      release_date:"01/04/1999",
    },

    {
      isbn:"567-4-90-187419-2",
      title:"H.I.V.E:Dreadnought",
      no_of_pages:237,
      edition:"1st",
      publisher:"Macmillan Books",
      price:"$19.99",
      designer:"./src/assets/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
      release_date:"30/01/2011",
    }
  ]

localStorage.setItem("bookTable", JSON.stringify(bookTable))

  

  let bookList =[
    {

    }
  ]

  return (
<section className='card'>
<BookCard info={bookTable[0]}/>
</section>
  



 

  )
}

export default App
