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
        <button onClick={handlePrevious}>
            <SvgComponent className="svg-prev"></SvgComponent>
            Anterior
    </button> : null
    }


    </>
  )
}

export default Pagination