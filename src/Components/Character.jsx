import{useEffect,useState} from 'react'
import axios from 'axios'
import CardCharacter from './CardCharacter'
import { ClipLoader } from 'react-spinners'
import '../Styles/CardStyles.css'
const Character = () => {
const [loading, setLoading] = useState(false)
const [search ,setSearch] =useState("")
const [characters, setCharacters] = useState([])

const apiFetch= async() =>{
  try {
    setLoading(true)
    const response = await axios.get('https://rickandmortyapi.com/api/character')
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

const handleChange =(e) =>{

}
const handleSubmit=(e) =>{
  e.preventDefault()
}

  return (
<>

 


<section className='card-container'>
  <div className='section-card'>
{
  loading ? <ClipLoader/>
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