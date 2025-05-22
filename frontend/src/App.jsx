import './App.css'
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Information from "./page/Information";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Desinformation from "./page/Desinformation";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
                 <Route path="/desinformation" element={<Desinformation />} />

                <Route element={<PrivateRoute/>}>
        <Route path="/information" element={<Information />} />
                </Route>

      </Routes>
      </BrowserRouter>
    </AuthProvider>
     
    </>
  )
}

export default App
