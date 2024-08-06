function Form(){
    return(
        <form className="form" style={{backgroundColor:"lightblue", borderRadius:"1cm",marginLeft:"3cm", height:"15cm", width:"15cm",alignContent:"center"}}>
            <h1>Book Information</h1>

            <label style={{marginLeft:"5cm"}}>ISBN Number</label><br></br>
            <input type="text" placeholder="e.g 123-4-56-789123-0" style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5.5cm"}}>Author</label><br></br>
            <input type="text" placeholder="e.g John Smith"style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5.7cm"}}>Title</label><br></br>
            <input type="text" placeholder="e.g Silence Of The Lambs"style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"4.6cm"}}>Number of Pages</label><br></br>
            <input type="text" placeholder="e.g 100" style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5.5cm"}}>Edition</label><br></br>
            <input type="text" placeholder="e.g 3rd Edition" style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5.3cm"}}>Publisher</label><br></br>
            <input type="text" placeholder="e.g Macmillan Books" style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5.6cm"}}>Price</label><br></br>
            <input type="text" placeholder="e.g $15.99" style={{borderRadius:"3cm", marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5.4cm"}}>Designer</label><br></br>
            <input type="text" placeholder="e.g img.jpg" style={{borderRadius:"3cm",marginLeft:"4cm"}}></input><br></br>

            <label style={{marginLeft:"5cm"}}>Year of Release</label><br></br>
            <input type="text" placeholder="e.g 01/01/1990" style={{borderRadius:"3cm"}}></input><br></br>

            <button style={{backgroundColor:"orange", color:"white", borderRadius:"3cm", marginLeft:"4cm"}} className="submit">Submit</button>
        </form>
    )
}
export default Form