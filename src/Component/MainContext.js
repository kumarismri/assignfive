import React,{useState,createContext} from 'react'

export const MainContext=createContext();

export const MainProvider = (props) => {

    const [students,setStudents]=useState([
        {
            "ID":"1",
            "Name": "Smriti",
            "Age":"22",
            "Course":"BE",
            "Batch":"3C",
        },
        {
          "ID": "2",
          "Name": "Aditi",
          "Age":"22",
          "Course":"BE",
          "Batch":"3C"
      
      },
      {
          "ID": "3",
          "Name": "Shruthi",
          "Age":"21",
          "Course":"BE",
          "Batch":"4A"
      }
      ,
      
      {
          "ID": "4",
          "Name": "Marwah",
          "Age":"22",
          "Course":"BE",
          "Batch":"4D"
      }

    ])
    return (
        <div>
            <MainContext.Provider value={[students, setStudents]}>
                {props.children}
            </MainContext.Provider>
            
        </div>
    )
}
