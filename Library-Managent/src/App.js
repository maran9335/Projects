
// import { useState } from 'react';
// import './App.css';

// import Result from './Result';
// const secretNum =Math.floor (Math.random() * 10) +1;

// function App() {
//   const [term,setterm]=useState("")

//   const handleChange = (e)=>{
//     setterm(e.target.value)
//   }
//   return (
//     <div className='container'>
      
//      <div className='head'>
//       <label>Guess the number between 1 to 10  </label>

//      </div>
//       <input  htmlFor='term' type='text' name='term' onChange={handleChange}>

//       </input>
//       <Result secretNum={secretNum} term={term} />
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development'
import Booklist from './Components/Booklist'
import Formabi from './Components/Form'
import ProductView from './Components/ProductView copy'
 
const App = () => {
  return (
    <div>
      <Header/>
     <BrowserRouter>
      <Routes>
      <Route path='booklist' element={<Booklist/>}/>
      <Route path='form'element={<Formabi/>}/>
      <Route path='view'element={<ProductView/>}/>
     
      </Routes>
   </BrowserRouter>
  </div>
  )
}
export default App

