//This is the Delete in CRUD. This deletes an item from the list.

function Delete({isbn}){
    let book = JSON.parse("bookTable")

    function HandleDelete(){
        
    }

    return(
        <button onClick={HandleDelete} style={{backgroundColor:"red", padding:"0.5cm", color:"white",borderRadius:"0.5cm"}}>Delete</button>
            )
}
export default Delete