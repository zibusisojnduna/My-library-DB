import { useState } from "react"


function Form(){
    const [inputs, setInputs ] = useState({}) 
     
    const handleChange = (event) => {
        const isbn = event.target.isbn
        const author = event.target.author
        const title = event.target.title
        const pages = event.target.pages
        const edition = event.target.edition
        const publisher = event.target.publisher
        const price = event.target.price
        const designer = event.target.designer
        const year = event.target.year
        setInputs(values =>({...values,[isbn]:author, title, pages, edition, publisher, price, designer, year}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Success!")
    }

    return(
        <form className="form" style={{backgroundColor:"white", borderRadius:"1cm",marginLeft:"3cm", height:"17cm", width:"15cm",alignContent:"center"}} onSubmit={handleSubmit}>
            <h1 style={{marginLeft:"0.5cm"}}>Book Information</h1>

            <label style={{marginLeft:"5cm"}}>ISBN Number</label><br></br>
            <input type="text" id="isbn" placeholder="e.g 123-4-56-789123-0" style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs.isbn || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5.5cm"}}>Author</label><br></br>
            <input type="text" id="author" placeholder="e.g John Smith"style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs. author || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5.7cm"}}>Title</label><br></br>
            <input type="text" id="title" placeholder="e.g Silence Of The Lambs"style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs.title || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"4.6cm"}}>Number of Pages</label><br></br>
            <input type="text" id="pages" placeholder="e.g 100" style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs.pages || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5.5cm"}}>Edition</label><br></br>
            <input type="text" id="edition" placeholder="e.g 3rd Edition" style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs.edition || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5.3cm"}}>Publisher</label><br></br>
            <input type="text" id="publisher" placeholder="e.g Macmillan Books" style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs.publisher || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5.6cm"}}>Price</label><br></br>
            <input type="text" id="price" placeholder="e.g $15.99" style={{borderRadius:"3cm", marginLeft:"4cm", padding:"0.2cm"}} value={inputs.price || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5.4cm"}}>Designer</label><br></br>
            <input type="text" id="designer" placeholder="e.g img.jpg" style={{borderRadius:"3cm",marginLeft:"4cm", padding:"0.2cm"}} value={inputs.designer || ""} onChange={handleChange}></input><br></br>

            <label style={{marginLeft:"5cm"}}>Year of Release</label><br></br>
            <input type="text" id="year" placeholder="e.g 01/01/1990" style={{borderRadius:"3cm", marginLeft:"4cm",padding:"0.2cm"}} value={inputs.year || ""} onChange={handleChange}></input><br></br>
            <br></br>
            <button style={{backgroundColor:"darkorange", color:"white", borderRadius:"0.2cm", marginLeft:"5cm",}}>Submit</button>
        </form>
    )
}
export default Form