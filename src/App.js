import './App.scss';
import {Routes , Route} from 'react-router-dom';
import React from 'react';
import Test1 from './components/Test1'
import Test2 from './components/Test2';
function App() {
    return ( 
       <Routes>
           <Route path="/" element={<Test1/>}/>
           <Route path="/test" element={<Test2/>}/>
       </Routes>
     );
}

export default App;