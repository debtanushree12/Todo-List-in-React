
import  './App.css';
// import Todo from './components/Todo'
// import Todolist from './components/Todolist';
// import Alert from './components/Alert';

// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
import Task from './components/Task';



function App(props) {
  
  return (
    <div>
     
     {/* <Navbar/> */}
      <Task/>
       {/* <h3 className='d-flex justify-content-center my-4'> Todo Application</h3> */}
      {/* <Todo/>
      <Todolist/> */}
      {/* <Alert/> */}
     
      {/* <BrowserRouter>
      <Routes>
      
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
     


      </Routes>
      </BrowserRouter> */}
    
    </div>
  );
}

export default App;
