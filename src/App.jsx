
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './components/Account/Account';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
