console.log("Begining of componet.")
function Testing(){
    function PushToList(){
        alert("I've added another item to the list.")
        console.log("I'm fine.")
    }

    function SayHello(Hi){
        let myGreeting = Hi
        return(
           <h1>Hello!</h1>
        )
    }

let greeting = SayHello()

console.log(greeting)



// PushToList()

    return(
        <></>
    )
    
}
export default Testing
console.log("End of component.")