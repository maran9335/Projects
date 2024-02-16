import { Component } from "react"


class Classrender extends Component {
 constructor(props){
    console.log("2 this is rendending")
    super(props)
    this.stat={
        name: "Keerthana"
    }
 }

    render(){
        console.log(" 1 This render ")
        return(
        <div>
        <div> Class Component in react </div>
        <div>{this.stat.name}</div>
        </div>
           
        )
    }

} 

export default  Classrender