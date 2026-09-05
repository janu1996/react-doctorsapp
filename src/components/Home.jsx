import { useEffect,useState } from 'react'
import Doctorcard from './Doctorcard';

function Home({newdoctor}) {
    let[doctors,setDoctors]=useState([])
    let [search,setSearch]=useState('')
    let[specialization,setSpecialization]=useState('')
    
    function getapidata(){
        let data = [ 
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
gender: "Male", 
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
setDoctors(data)
    }
    useEffect(()=>{
        getapidata()
    },[])

    useEffect(()=>{
        if(newdoctor){
            setDoctors(prev=>[...prev,newdoctor])
        }
    },[newdoctor])

    let filtereddoctors=doctors.filter((val)=>{
        return (val.name.toLowerCase().includes(search.toLowerCase()) 
        && 
        (specialization=="" || val.specialization==specialization)
    )
        // return (search.toLowerCase().includes(val.name.toLowerCase()))
    })
  return (
    <div>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='search doctor'/>
        <select value={specialization} onChange={(e)=>setSpecialization(e.target.value)} name='' id='' >
            <option value='Bones'>Bones</option>
            <option value='Muscles'>Muscles</option>
            <option value='Heart'>Heart</option>
        </select>
        {doctors.length>0?(
            <div className='doctorcontainer'>
                {filtereddoctors.map((doctor)=>{
                return <Doctorcard 
                name={doctor.name}
                specialization={doctor.specialization}
                gender={doctor.gender}
                imglink={doctor.imglink}
                key={doctor.id}/>
            })}
               
            </div>):(<h1>loading</h1>)}
    </div>
  )
}

export default Home