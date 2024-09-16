import '../Styles/FooterStyles.css'
import SvgIconGIT from './SvgIconGIT'
import SvgIconInstagram from './SvgIconInstagram'
import SVGIconLinkeding from './SVGIconLinkeding'

const Footer = ({info ,location,episodes}) => {
  return (
   <footer className='footer-container'>
    <div className='info-container'>

   
    <ul className='footer-ul'>
        <li className='li-container'>  CHARACTERS: {info.count} </li>
        <li className='li-container'>LOCATIONS: {location.count}</li>
        <li className='li-container'> EPISODES: {episodes.count}</li>
    </ul>
    <div className='status-server'>
 <span className='server-text'>Server Status <span className='server-icon'></span></span>
    </div>
    </div>
   
      <ul className='social-medialist'>
        <li className='social-media-icon'><a href='https://www.linkedin.com/in/ismael-lajud' target='_blank' ><SVGIconLinkeding/></a></li>
        <li className='social-media-icon'><a href='https://github.com/IsmaelLajud2' target='_blank'><SvgIconGIT/></a></li>
        <li className='social-media-icon'><a href='https://www.instagram.com/ismael_ljd/' target='_blank'> <SvgIconInstagram/></a></li>
      </ul>
      <div/>
          
    <div className='footer-end'>
      <span className='footer-span'> ❮❯ by  <a className='footer-a' href='https://www.linkedin.com/in/ismael-lajud' target='_blank' > 
      Ismael Lajud 
        </a> </span>
    </div>
   </footer>
  )
}

export default Footer