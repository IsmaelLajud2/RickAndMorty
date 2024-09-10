import  { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
        <label> Busqueda
    <input onChange={handleChange} value={character} placeholder='Rick....' type='text' name='character'/>
        </label>
        
    </form>
  )
}

export default SearchForm