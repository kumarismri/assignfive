import './App.css';
import Home from './Component/Home'
import Student from './Component/Student'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './Component/Contact';
import Homee from './Component/Homee';
import AddStudent from './Component/AddStudent';
import { MainProvider } from './Component/MainContext';
import EditContent from './Component/EditContent';

function App() {
  return (
    <MainProvider>
    <div className="App">
      <Router>
       <Home/>
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/home" element={<Homee/>} />
        <Route exact path="/student" element={<Student/>}/>
        <Route path="/student/addstudent" element={<AddStudent/>}/>  
        <Route path="/student/edit/:id" element={<EditContent/>}/>   
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
     
    </div>
    </MainProvider>
  );
}

export default App;
