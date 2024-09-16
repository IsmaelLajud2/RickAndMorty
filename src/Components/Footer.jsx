import '../Styles/FooterStyles.css'
import SvgIconGIT from './SvgIconGIT'
import SvgIconInstagram from './SvgIconInstagram'
import SVGIconLinkeding from './SVGIconLinkeding'

const Footer = () => {
  return (
   <footer className='footer-container'>
    <div className='info-container'>

   
    <ul className='footer-ul'>
        <li className='li-container'>CHARACTERS:</li>
        <li className='li-container'>LOCATIONS:</li>
        <li className='li-container'>EPISODES:</li>
    </ul>
    <span className='server-text'>Server Status <span className='server-icon'></span></span>
    </div>
    <div className='social-mediacontainer'></div>
      <ul className='social-medialist'>
        <li className='social-media-icon'><SvgIconInstagram/></li>
        <li className='social-media-icon'><SVGIconLinkeding/></li>
        <li className='social-media-icon'><SvgIconGIT/></li>
      </ul>
      <div/>
          
    <div>
      <span>by Ismael Lajud </span>
    </div>
   </footer>
  )
}

export default Footer