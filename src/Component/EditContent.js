import * as React from 'react';
import { useState,useEffect } from 'react';
import {Link,useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { MainContext } from './MainContext';


const EditContent = () => {

    const [students,setStudents]=useContext(MainContext)
    const {id}=useParams();
    const [Name,setName]= useState("");
    const [Age,setAge]= useState("");
    const [Batch,setBatch]= useState("");
    const [Course,setCourse]= useState("");
  

    useEffect(() => {
        students.forEach((data)=>{
            if(data.ID===id){
               setName(data.Name);
               setAge(data.Age);
               setBatch(data.Batch);
               setCourse(data.Course);

            }
        })
    }, [id,students])

    const handleChange=()=>{

      setStudents((previousV)=>previousV.map((data)=>data.ID===id?
      {
        ID:id,
        Name:Name,
        Age:Age,
        Batch:Batch,
        Course:Course
      }:data));
    
    }


    return (
    <div>

    <Box className='boxx'
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-name"
        label="Name"
        value={Name}
        onChange={(e)=>setName(e.target.value)}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Age"
        value={Age}
        onChange={(e)=>setAge(e.target.value)}
      />

     <TextField
        id="outlined-uncontrolled"
        label="Course"
        value={Course}
        onChange={(e)=>setCourse(e.target.value)}
      />

     <TextField
        id="outlined-uncontrolled"
        label="Batch"
        value={Batch}
        onChange={(e)=>setBatch(e.target.value)}
      />
    </Box>
    <button className='bttnn'><Link to="/student">Cancel</Link></button>
    <button className='bttnn' onClick={handleChange}><Link to="/student">Submit</Link></button>
    </div>
  );  
}
export default EditContent 
