import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from "react"
function Doctordetails() {
    let {id}=useParams()
    let [doctor,setDoctor]=useState()
    function getapidata(){
        let data=[ 
{ 
id: 1, 
name: "Teja", 
age: 26, 
gender: "Male", 
specialization: "Muscles", 
salary: 7000000, 
imglink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46nAKOuOI0dZkgctxWD72NEA4fapqeQ88g0USy0TcVg&s=10' 
}, 
{ 
id: 2, 
name: "Sam", 
age: 26, 
gender: "Female", 
specialization: "Bones", 
salary: 4000000,
imglink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg98-52xcgPqmTNcm4ZFKlkHOKODgkofbiXkyxF71cDA&s=10'

}, 
{ 
id: 3, 
name: "Anu", 
age: 25, 
gender: "Female", 
specialization: "Heart", 
salary: 5000000, 
imglink:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4nJ7CWyaXhg0sW1TcQ3SnrIexya7p50t878UKwlFRxA&s=10'
}, 
];
 let finaldata=data.find((val)=>id==val.id)
 setDoctor(finaldata)
    }
    useEffect(()=>{
        getapidata()
    },[])
  return (
    <div>{doctor && (
       <div>
       <h1>{doctor.id}</h1>
       <h1>{doctor.name}</h1>
       <h1>{doctor.gender}</h1>
       <h1>{doctor.salary}</h1>
       <h1>{doctor.age}</h1>
       <h1>{doctor.specialization}</h1>
        </div>
   
  )}
   </div>)
}

export default Doctordetails