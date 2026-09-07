import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section.jsx'
import Doctorcard from './components/Doctorcard.jsx'
import Addnewdoctor from './components/Addnewdoctor.jsx'
import { Route,Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails.jsx'
// import{useState} from 'react'
// import { useEffect } from 'react'

function App() {
  // let count=0
  // let [count,setCount]=useState(0);
  // let[data,newData]=useState('')
  // useEffect(()=>{
  //   console.log('api calling')
  // },[data])
  return (
    <div>
      {/* {data}
      <button onClick={()=>{
        let a=prompt('enter a name')
        newData(a)}}>newdata</button>
      count is {count}
      <button onClick={()=>{setCount(count+1)
        }}>Add</button> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/addnewdoctor' element={<Addnewdoctor/>}/>
        <Route path='/doctordetails/:id' element={<Doctordetails/>}/>
      </Routes>
        {/* <Section/>
        <div className="doctorcontainer">
          <Doctorcard name="Dr.Joseph" gender="Male" specialty="Heart Specialist" imglink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46nAKOuOI0dZkgctxWD72NEA4fapqeQ88g0USy0TcVg&s=10'/>
          <Doctorcard name="Dr.Varshini" gender="Female" specialty="Neurologist" imglink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg98-52xcgPqmTNcm4ZFKlkHOKODgkofbiXkyxF71cDA&s=10'/>
          <Doctorcard name="Dr.Ram " gender="Male" specialty="Pediatrician" imglink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7E7S89FzitgYFnbrlLh9WRftZwMcCm1kyxo_4Lq9uw&s=10'/>
          <Doctorcard name="Dr.Pallavi" gender="Female" specialty="Dermatologist" imglink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nJ7CWyaXhg0sW1TcQ3SnrIexya7p50t878UKwlFRxA&s=10'/>
        </div>
        
        <div className='addnewdoctor'>
          <Addnewdoctor/> */}
        </div>
    
  )
}

export default App