import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
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
        <SignedOut>
          <Routes>
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="*" element={<Navigate to={"/auth"} replace={true} />} />
          </Routes>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<Navigate to={"/"} replace={true} />}/>
          </Routes>
        </SignedIn>
      </main>
      <Toaster position="top-center" />
    </div>
  );
}