import './App.css';
import Ask from './Ask';
import React from 'react';
import { useEffect, useState} from "react";

function App() {

  const [showText, setShowText] = useState(true);
  const [showAsk, setShowAsk] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
      setShowText(false);
      }, 3000); // Adjust the timeout based on your requirements

      return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    setShowAsk(true);
  }
  return (
    <>
    {showAsk ?  (<Ask />) : (
    <div className="App" >
    { showText ? (
       <h1 className="fade-in">Hello...</h1> 
      ) :
     (
       <div className="fade-out-and-show">
         <div className='box'>
           <div className='form'>
           <br/><br/>
             <label for="name"> 
               Name: <input name='name' placeholder='Enter your full name'/>
             </label>
             <br/>
             <br/>
             <label for="email"> 
               Email:  <input name='email'placeholder='Enter your email'/>
             </label>
             <br/><br/>
             <button className='sub' onClick={handleSubmit}>Submit</button>
             <br/>
           </div>
         </div>
       </div>
     )
    }
    </div>)
}
</>
  );
}

export default App;
