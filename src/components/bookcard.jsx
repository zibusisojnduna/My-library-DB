import Delete from "./deletebook"

function BookCard({info, isbn}){
    // console.log(info.designer)
    return(
        <div className="main" style={{boxShadow:"4cm 4cm 4cm 4cm  rgba(0, 128, 0, 0.116)"}}>
            <div className="image" style={{padding:"10%", alignItems:"center"}}>
                <img src={info.designer}></img>
            </div>
            
            <div style={{padding:"5%"}}>
                <h3>{info.title}</h3>
                <h4 style={{color:"lightgrey"}}>By{info.author}</h4>
            </div>

            <div style={{padding:"5%"}}>
                <h3>{info.price}</h3>
                <Delete isbn={info}/>
            </div>
        </div>
    )
}
export default BookCard