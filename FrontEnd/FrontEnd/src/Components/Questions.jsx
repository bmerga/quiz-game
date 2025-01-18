import { useEffect, useState } from 'react'
import data from '../database/data'


const Questions = () => {
   
    const [checked, setChecked] = useState(undefined)   
    
    useEffect(() => {console.log(data)})
    
    const question = data[0]



    function onSelect(){
        console.log(Questions) 
    }
  
        return (
    <div className="questions">  
    <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}> 
       {question.options.map((q, i) => {
         <li key={i}>
         <input 
            type="radio" 
            name="options" 
            id={`q${i}-options`}
            value={q} 
            onChange={onSelect}
         />
         <label className='text-primary' htmlFor={`q${i}-options`}>q</label>
         <div className="check "></div>
     </li>
       })}
      </ul>
    </div>
  )
}

export default Questions
