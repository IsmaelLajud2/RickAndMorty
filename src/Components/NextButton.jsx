import React from 'react'

const NextButton = ({onNext,next}) => {

    const handleNext =() =>{
      onNext()
    }
  return (
    <>
 
  {
    next ? 
<button onClick={handleNext}>
  <span>Siguiente</span>
  <svg className='svg-next' width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
</button> : null

  }
     </>
  )
}

export default NextButton