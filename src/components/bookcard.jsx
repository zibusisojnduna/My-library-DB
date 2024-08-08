import Delete from "./deletebook"
import Update from "./updatebook"

function BookCard({info}){
    
    return(
        <div className="main" style={{boxShadow:"4cm 4cm 4cm 4cm  rgba(0, 128, 0, 0.116)", height:"17cm", width:"10cm", backgroundColor:"white", fontFamily:"arial",}}>
            <div className="image" style={{padding:"1%",}}>
                <img src={info.designer} style={{marginLeft:"1.5cm"}}></img>
            </div>
            
            <div style={{padding:"5%"}}>
                <h3 style={{color:"black"}}>{info.title}</h3>
                <h4 style={{color:"lightgrey"}}>By {info.author}</h4>
            </div>

            <div style={{padding:"5%"}}>
                <h3>{info.price}</h3>    
            </div>
            <Update/><Delete/>
        </div>
    )
}
export default BookCard