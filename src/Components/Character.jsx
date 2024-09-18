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
  const [nameFilter, setNameFilter] = useState("");
  const [info, setInfo] = useState({});
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [location, setLocation] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  
  const apiFetch = useCallback(async (url = 'https://rickandmortyapi.com/api/character', isFilter = false) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setInfo(response.data.info); 
      setLoading(false);

    
      if (isFilter) {
        setAllCharacters(response.data.results);
      } else {
     
        setCurrentPageData(response.data.results.slice(0, 6));
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }, []);


  const fetchFilteredCharacters = useCallback(async (url = `https://rickandmortyapi.com/api/character/?name=${nameFilter}`) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setInfo(response.data.info);
      setAllCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error al filtrar personajes:', error);
      setLoading(false);
    }
  }, [nameFilter]);

 
  const locationfetch = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://rickandmortyapi.com/api/location');
      setLocation(response.data.info);

      const episodeResponse = await axios.get('https://rickandmortyapi.com/api/episode');
      setEpisodes(episodeResponse.data.info);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }, []);

 
  useEffect(() => {
    if (nameFilter) {
      fetchFilteredCharacters(); 
    } else {
      apiFetch(); 
    }
  }, [nameFilter, apiFetch, fetchFilteredCharacters]);

  useEffect(() => {
    locationfetch();
  }, [locationfetch]);

 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  
  const handleNameFilter = (e) => {
    setNameFilter(e.target.value);
    
  };

 
  const onNext = () => {
    if (info.next) {
      if (nameFilter) {
        fetchFilteredCharacters(info.next);
      } else {
        apiFetch(info.next); 
      }
    }
  };

  const onPrevious = () => {
    if (info.prev) {
      if (nameFilter) {
        fetchFilteredCharacters(info.prev); 
      } else {
        apiFetch(info.prev); 
      }
    }
  };

  
  const filteredResults = nameFilter ? allCharacters : currentPageData;

  return (
    <>
      <div className='search-section'>
        <Pagination onNext={onNext} onPrevious={onPrevious} next={info.next} prev={info.prev} />
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="search"
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
            filteredResults.slice(0, 6).map((character) => (
              <div key={character.id} data-aos="fade-right">
                <CardCharacter key={character.id} characterinfo={character} />
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
