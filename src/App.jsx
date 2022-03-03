import { useState } from "react";
import Start from "./componenet/Start";
import "./app.css"
import { QuizData } from "./Data";
import { Moneyparm } from "./Data";
function App() {
  const [username, setUsername] = useState(null);
  const [curretQte, setCurretQte] = useState(QuizData[1]);
  const [classname, setClassname] = useState("p");

  const  handleClick =(val)=>{
    setTimeout(()=>{
      setClassname( curretQte.answer[val].correct ? "p correctAns" : "p wrongAns " )
      alert(curretQte.answer[val].correct)

    },500)
  }
  
  return (
    <>
    { username ? (

    <div className="app">
        <div className="container">
          <div className="left">
            <div className="left-top"> 
            <p >0</p>
             </div>
            <div className="left-bottom">
              <div className="text-qts">
                <p>{curretQte.question} </p>
              </div>

              <div className="text-ans">
                <div>
                <p onClick={()=> handleClick(0)} className={curretQte.answer[0].correct == true ? classname : "p"} > {curretQte.answer[0].text} </p>
                <p onClick={()=> handleClick(1)} className={curretQte.answer[1].correct == true ? classname : "p"} > {curretQte.answer[1].text} </p>
                </div>
                <div>
                <p onClick={()=> handleClick(2)} className={curretQte.answer[2].correct == true ? classname : "p"} > {curretQte.answer[2].text} </p>
                <p onClick={()=> handleClick(3)} className={curretQte.answer[3].correct == true ? classname : "p"} > {curretQte.answer[3].text} </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="right">
            { Moneyparm.map((val)=>(
              <div className={curretQte.id == val.id ? "div active" : "div"} >
                <p> {val.id} </p>
                <span> {val.money} </span>
              </div>
            )) }
          </div>
        </div>
    </div>

    ) : <Start setUsername={setUsername} />

   }
    
    </>
  );
}

export default App;
