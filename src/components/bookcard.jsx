function BookCard({info}){
    console.log(info.designer)
    return(
        <div className="main">
            <div className="image" style={{padding:"10%", alignItems:"center"}}>
                <img src={info.designer}></img>
            </div>
            
            <div style={{padding:"5%"}}>
                <h3>{info.title}</h3>
                <h4 style={{color:"lightgrey"}}>By {info.author}</h4>
            </div>

            <div style={{padding:"5%"}}>
                <h3>{info.price}</h3>
            </div>
        </div>
    )
}
export default BookCard