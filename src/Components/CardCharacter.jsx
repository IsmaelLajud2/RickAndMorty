 

import '../Styles/CardStyles.css'

const CardCharacter = ({characterinfo}) => {

// const lastEpisode =characterinfo.episode[characterinfo.episode.length -1]    
  return (
   
   <article className='card-article'>
<div className='imagen-container'>
<img className='imagen-character'alt={characterinfo.name} src={characterinfo.image}/>
</div>
<div className='character-info'>
<h1 className="name-character">{characterinfo.name}</h1>
    
    <span className="status-character">
        <span className={characterinfo.status === "Alive" ? "status-icon-alive" : "status-icon-dead"}>
            </span>{characterinfo.status} - {characterinfo.species}</span> 
    <p className="first-seen">Primera vez visto en:</p>
    <p className="first-seen-name">{characterinfo.origin.name}</p>
    <p className="last-seen">Ultima vez visto en:</p>
    <p className="last-seen-name">{characterinfo.location.name}</p>
</div>
    
    </article>
   
  
  
  )
}
  

export default CardCharacter