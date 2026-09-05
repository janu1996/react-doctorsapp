import React from 'react'

function Doctorcard({name,gender,specialization,imglink}) {

  return (
    <div className='card'>
        <div><img src={imglink}/></div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button>view details</button>
    </div>
  )
}

export default Doctorcard 