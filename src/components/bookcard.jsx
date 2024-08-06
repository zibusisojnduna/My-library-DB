function BookCard(info){
    return(
        <div className="main">
            <div className="image" style={{backgroundImage:`url(${require(info.designer)})`}}>
                
            </div>
            
            <div>
                <h3>{info.title}</h3><br></br>
                <p style={{color:"lightgrey"}}>{info.author}</p>
            </div>

            <div>
                <h3>{info.price}</h3>
            </div>
        </div>
    )
}
export default BookCard