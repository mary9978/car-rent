
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './pages/Home';

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<h1>Login page</h1>}/> 
            <Route path="*" element={<h1>not found</h1>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
