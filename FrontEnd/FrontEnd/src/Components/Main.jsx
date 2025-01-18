import { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Main.css'

const Main = () => {
    const inputRef = useRef(null);
  return (
    <div className="Container"> 
      <h1 className="title-text-light">Quiz Application</h1>
      <ol>
        <li> There are ten question</li>
        <li> You will get 15 seconds to answer each question</li>   
        <li> At the end of the quiz, you will get your result</li>
        <li> Click on the start button to start the quiz</li>
        <li> Click on the next button to go to the next question</li>
        <li> Click on the previous button to go to the previous question</li>
        <li> Click on the submit button to submit your answers</li>
        <li> Click on the result button to see your result</li>
        
      </ol>
      <form id="Form"> 
        <input ref = {inputRef} className='userid' type="text" placeholder="Username" />
      </form>
      <div className='Start'>
         <Link to={"/quiz"} className="btn">Start Quiz</Link>
      </div>
    </div>
  )
}

export default Main
