import { useNavigate } from "react-router-dom"

function Doctorcard({name,gender,specialization,imglink,id}) {
  let navigate=useNavigate()
  return (
    <div className='card'>
        <div><img src={imglink}/></div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={()=>navigate(`/doctordetails/${id}`)}>view details</button>
    </div>
  )
}

export default Doctorcard 