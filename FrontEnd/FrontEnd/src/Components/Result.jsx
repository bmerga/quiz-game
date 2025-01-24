import '../Styles/Result.css'
import { Link } from 'react-router-dom'

const Result = () => {
  function onRestart(){
    console.log("on Restart")
  }

  return (
    <div className="Container"> 
       <h1 className="title-text-light"> Quiz Application</h1>
       <div className="result flex-center"> 
          <div className="flex">
             <span> Username</span>  
             <span className="bold"> Daily Tuition</span>
          </div>
          <div className="flex">
             <span> Total quiz points</span>  
             <span className="bold"> 50</span>
          </div>
          <div className="flex">
             <span> Total questions</span>  
             <span className="bold"> 5</span>
          </div>
          <div className="flex">
             <span> Total attempts</span>  
             <span className="bold"> 03</span>
          </div>
          <div className="flex">
             <span> Total earn points</span>  
             <span className="bold"> 30</span>
          </div>
          <div className="flex">
             <span> Quiz Result</span>  
             <span className="bold"> Passed</span>
          </div>
      </div>
         <div className='Start'>
            <Link  className="btn" to={"/"} onClick={onRestart}> Restart </Link>
         </div>
      
    </div>
  )
}

export default Result
