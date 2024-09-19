import '../Styles/HeroStyles.css'
import SvgRickAndMorty from './SVG/SvgRickAndMorty'
const Hero = () => {
  return (
    <section className='hero-section'>
            <h1 className='hero-title'>RICK AND MORTY</h1>
            <SvgRickAndMorty className="svg-container"></SvgRickAndMorty>
    </section>
  )
}

export default Hero