import { useState } from "react";
import Start from "./componenet/Start";
import "./app.css"
import { QuizData } from "./Data";
import { Moneyparm } from "./Data";
import WinGame from "./componenet/WinGame";
function App() {
  const [username, setUsername] = useState(null);
  const [curretQte, setCurretQte] = useState(QuizData[0]);
  const [classname, setClassname] = useState("p");
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [winGame, setWinGame] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const ansBtns =[0,1,2,3]

 
  const  handleClick =(val)=>{
    
      setCurrentAnswer(val);
       setClassname(curretQte.answer[val].correct ? "p correctAns" : "p wrongAns " );
       if(curretQte.answer[val].correct ){
         setCorrectAnswer(true)
       }
       
    

  }
 

  const nextQuestion =()=>{
    let value = curretQte.id;
    setClassname('p')
    if(correctAnswer){
      setCurretQte(QuizData[value])
          value++;
          if(value == QuizData.length+1 ){
          setWinGame(true)
          }
      setCorrectAnswer(false)

    }else{
      console.log("not");
    }
  
  }

  if(winGame){
      return <WinGame/>
  }
  
  return (
    <>
    { username ? (

    <div className="app">
        <div className="container">
          <div className="left">
            <div className="left-top"> 
            <p >0</p>
            <button  onClick={nextQuestion} className="nextQuestion" >Next</button>
         
             </div>
            <div className="left-bottom">
              <div className="text-qts">
                <p>{curretQte.question} </p>
              </div>

              <div className="text-ans">
                  {
                    
                    ansBtns.map((val)=>(
                      
                      
                      <li onClick={()=>handleClick(val )} className={ val === currentAnswer? classname : "p"}> {curretQte.answer[val].text} </li>
                      
                      
                      
                    ))
                  }
           
              </div>
            </div>
          </div>

          
          <div className="right">
            { Moneyparm.map((val)=>(
              <div className={curretQte.id == val.id ? "div active" : "div"} >
                <p > {val.id} </p>
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


 
// let value = curretQte.id +1;
// console.log(value);
// if(curretQte.answer[val].correct ){
//   setCurretQte(QuizData[value])
//   value++;
//   if(value == 4){
//    setWinGame(true)
//   }
//  }
//  else{   
//  }
//  setClassname('p')