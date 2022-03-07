import React, { useRef} from 'react';
import "./start.css"
import useSound from 'use-sound';
import playSound from "../sounds/play.mp3"


function Start({setUsername}) {
    const inputRef = useRef();
    const [letPlay] = useSound(playSound);
    const handleRef =()=>{
        setUsername(inputRef.current.value);
        letPlay();
    }
    return (
        <div className='start' >
                <div className="start-con">
            <input type="text" placeholder='Enter you name' ref={inputRef} />
            <button onClick={handleRef} >Start</button>

                </div>
        </div>
    );
}

export default Start;