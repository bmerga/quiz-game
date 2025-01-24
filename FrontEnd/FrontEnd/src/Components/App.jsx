import '../Styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Main'
import Quiz from './Quiz'
import Result from './Result'

// React routes 
const router = createBrowserRouter([
  {path: '/', element: <Main />},
  {path: '/quiz', element: <Quiz/>},
  {path: '/result', element: <Result/>}
])


function App() {
  
  return (
    <>
      <RouterProvider router={router} />
        
    </>
  )
}

export default App
