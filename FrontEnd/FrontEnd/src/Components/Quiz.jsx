import Questions from "./Questions"
import "../Styles/Quiz.css"

const Quiz = () => {

function onPrev(){console.log("on prev click")}
function onNext(){console.log("on next click")}
  
return (
    <div className="Container">
      <h1 className="title-text-light">Quiz Application</h1>
      <Questions />
      <div className="grid">  
        <button className="btn prev" onClick={onPrev}>prev</button>
        <button className="btn next" onClick={onNext}>next</button>
      </div>
    </div>
  )
}

export default Quiz
