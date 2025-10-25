import { createContext, useContext, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const { isSignedIn, user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        // User is authenticated
        toast.success(`Welcome ${user.firstName || 'back'}!`);
      } else {
        // User is not authenticated
        navigate('/auth');
      }
    }
  }, [isSignedIn, isLoaded, navigate, user]);

  const value = {
    isSignedIn,
    user,
    isLoaded,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}