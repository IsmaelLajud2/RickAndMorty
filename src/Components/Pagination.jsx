import '../Styles/PaginationStyles.css'
import SvgComponent from './SvgComponent'

const Pagination = ({ onPrevious,prev}) => {

const handlePrevious=() =>{
    onPrevious()
    }
  return (
    <>
    {
        prev ? 
        <button onClick={handlePrevious} >
            <SvgComponent className="svg-prev"></SvgComponent>
            Anterior
    </button> : 
     <button onClick={handlePrevious} className='button-disabled' disabled>
     <SvgComponent className="svg-prev-disabled"></SvgComponent>
     Anterior
</button>
    }


    </>
  )
}

export default Pagination