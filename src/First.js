import './App.css';
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import React from 'react';

function First() {

    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowText(false);
        }, 3000); // Adjust the timeout based on your requirements

        return () => clearTimeout(timer);
    }, []);
    return(
        <div className="App">
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
                <div className='sub'>
                    <Link to={"/ask"}>Submit</Link>
                </div>
                <button className='sub'>Submit</button>
                <br/>
              </div>
            </div>
          </div>
        )
       }
    </div>
    )

}

export default First;