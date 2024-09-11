import  { useState } from 'react'
import '../Styles/FormStyles.css'
const SearchForm = ({changeCharacter}) => {

  const [character,setCharacter]= useState("")  

  const handleSubmit=(e) =>{
    e.preventDefault()
    changeCharacter(character)
  }

  const handleChange=(e)=>{
 
setCharacter(e.target.value)
console.log(character)
  }
  return (
    <form className="form">
    <input className="input" placeholder="Type your text" required="" type="text"/>
    <span className="input-border"></span>
  </form  >
    
  )
}

export default SearchForm