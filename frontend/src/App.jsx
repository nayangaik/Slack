import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import CallPage from './pages/callPage.jsx';
import './App.css';
import { Toaster, toast } from 'react-hot-toast';
import { useEffect } from 'react';

export default function App() {
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      toast.success("Signed in successfully!");
    }
  }, [isSignedIn]);

  return (
    <div className="app">
      <main>
        
          <Routes>
            <Route path="/auth" element={isSignedIn ? <Navigate to={"/"} replace={true} /> : <AuthPage/>} />
            <Route path="*" element={isSignedIn ? <Navigate to={"/"} replace={true} /> : <Navigate to={"/auth"} replace={true} />} />
           
          </Routes>
       
      
          <Routes>
            <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to={"/auth"} replace={true}  />}/>
           
            <Route path="/auth" element={<Navigate to={"/"} replace={true} />}/>
             <Route path="/call/:id" element={isSignedIn ? <CallPage/> : <Navigate to={"/auth"} replace={true} />}/>
            <Route path="*" element={<Navigate to={"/"} replace={true} />} />
          </Routes>
        
      </main>
      <Toaster position="top-center" />
    </div>
  );
}