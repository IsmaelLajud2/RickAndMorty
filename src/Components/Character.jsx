import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import CardCharacter from './CardCharacter';
import { ClipLoader } from 'react-spinners';
import '../Styles/CardStyles.css';
import '../Styles/FormStyles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Pagination from './Pagination';
import NextButton from './NextButton';
import Footer from './Footer';

const Character = () => {
  const [loading, setLoading] = useState(false);
  // const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [info, setInfo] = useState({});
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const[location,setLocation]=useState([])
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  const apiFetch = useCallback(async (url = 'https://rickandmortyapi.com/api/character') => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      // setCharacters(response.data.results.slice(0,6));
      setInfo(response.data.info);
      setLoading(false);
     setCurrentPageData(response.data.results.slice(0,6));
      console.log(response)
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  },[]);



 const locationfetch =async () =>{
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location')
    setLocation(response.data.info)
    const personaje= await axios.get('https://rickandmortyapi.com/api/episode')
    setEpisodes(personaje.data.info)

  } catch (error) {
    console.log(error.message)
  }
 }
  const fetchAllCharacters =  useCallback(async () => {
    setLoading(true);
    let allResults = [];
    let url = 'https://rickandmortyapi.com/api/character';
    
    try {
      while (url) {
        const response = await axios.get(url);
        allResults = [...allResults, ...response.data.results];
        url = response.data.info.next;
        
      }
      setAllCharacters(allResults);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar todos los personajes:', error);
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    if (nameFilter) {
      fetchAllCharacters(); 
    } else {
      apiFetch();
    }
  }, [nameFilter, apiFetch, fetchAllCharacters]);

useEffect(() => {
locationfetch()
}, [])


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameFilter = (e) => {
    setNameFilter(e.target.value);
  };

  const onNext = () => {
    if (info.next) {
      apiFetch(info.next);
    }
  };

  const onPrevious = () => {
    if (info.prev) {
      apiFetch(info.prev);
    }
  };


  const filteredResults = nameFilter
    ? allCharacters.filter(character =>
        character.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : currentPageData;

  return (
    <>
      <div className='search-section'>
        <Pagination onNext={onNext} onPrevious={onPrevious} next={info.next} prev={info.prev} />
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            value={nameFilter}
            onChange={handleNameFilter}
            placeholder='Busca tu personaje...'
          />
          <span className="input-border"></span>
        </form>
        <NextButton onNext={onNext} next={info.next} />
      </div>
      <section className='card-container'>
        <div className='section-card'>
          {loading ? (
            <ClipLoader size={150} />
          ) : (
            filteredResults.slice(0, 100).map((character, index) => (
              <div key={index} data-aos="fade-right">
                <CardCharacter key={index} characterinfo={character} />
              </div>
            ))
          )}
        </div>
      </section>
      <Footer info={info} location={location} episodes={episodes}></Footer>
      
    </>
  );
};

export default Character;
