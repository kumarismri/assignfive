import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MainContext } from './MainContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'



export default function StateTextFields() {
  const [Name,setName] = useState("")
  const [Age,setAge] = useState("")
  const [Course,setCourse] = useState("")
  const [Batch,setBatch] = useState("")

  const [students,setStudents]=useContext(MainContext)

  const handleClick=()=>{
    setStudents([...students,{
      Name:Name,
      Age:Age,
      Course:Course,
      Batch:Batch,
      ID:new Date().getTime().toString()
    }])
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
    <button className='bttnn'><Link to="/student" >Cancel</Link></button>
    <button className='bttnn' onClick={handleClick} ><Link to="/student">Update</Link></button>
    </div>
  );
}
