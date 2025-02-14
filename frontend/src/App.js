import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import  Home from "./component/Home";
// import Crud  from './component/Crud';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='crud' element={<Crud/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
