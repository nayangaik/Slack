import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';

export default function App() {
  return (
    <div className="app">
      <header>
        <SignInButton mode="modal"/>
      </header>
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
    </div>
  );
}