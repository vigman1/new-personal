import './App.css';
import React, { useState } from 'react';


function Ask() {
    const question = "./images/ask.gif";
    const yes = "./images/yes.gif";
    const sad = "./images/sad-sad-cat.gif"
    const red = "#cf1735"
    const white = "white"

    const [source, setSource] = useState(question);
    const [colour, setColour] = useState(red);
    const [hb, setHb] = useState(false);

    const handleYes = () => {
        setSource(yes)
    }
    const handleNo = () => {
        setSource(sad)
        setColour(white)
        setHb(true)
    }
    return(
        <>
        <div className='App' style={{backgroundColor : `${colour}`, backgroundImage: "/images/rain.jpg"}}>
            <div>
                <img src={source} alt='nmae'></img>
                <br/>
                <br/>
                <div className='buttons'>
                    {
                        hb ? (<img style={{height: '100px'}} src='./images/heartbreak.jpg'></img>) : (
                            <>
                            <button onClick={handleYes} className='sub' style={{backgroundColor: 'whitesmoke', width: '30%', margin: '20px 20px'}} >Yes</button>                    
                            <button onClick={handleNo} className='sub' style={{backgroundColor: 'whitesmoke', width: '30%', margin: '20px 20px'}} >No</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Ask;