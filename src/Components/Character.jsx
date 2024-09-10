import{useEffect,useState} from 'react'
import axios from 'axios'
import CardCharacter from './CardCharacter'
import { ClipLoader } from 'react-spinners'
import '../Styles/CardStyles.css'
import SearchForm from './SearchForm'
const Character = () => {

const [loading, setLoading] = useState(false)
const [characters, setCharacters] = useState([])
const [nameFilter,setNameFilter] =useState("")

const apiFetch= async() =>{
  try {
    setLoading(true)
    const response = await axios.get(`https://rickandmortyapi.com/api/character`)
    setCharacters(response.data.results)
    setLoading(false)
    console.log(response)
  } catch (error) {
    console.error(error.message)
  }
}

useEffect(() => {
 apiFetch()
}, [])

const handleSubmit=(e)=>{
  e.preventDefault()
}
const handleNameFilter=(e)=>{
  setNameFilter(e.target.value)
}

const results =characters.filter((info) =>{
  const filterName = info.name.toLowerCase().includes(nameFilter.toLocaleLowerCase())
  return filterName
})

  return (
<>
<form onSubmit={handleSubmit}>
  <input type="text"  value={nameFilter} onChange={handleNameFilter} />


</form>

<section className='card-container'>
  <div className='section-card'>
{
 results ? 
 results.map((character ,index) =>(
  <CardCharacter key={index} characterinfo={character} ></CardCharacter>
 ))
   : (
    characters.map((character,index) =>{
      return <CardCharacter key={index} characterinfo={character}/>
   
    })
   
   )
  
}
</div>
</section>
</>
    )
}

export default Character