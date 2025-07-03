import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Create the context
export const UserContext = createContext();

// Create the provider component
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const allowedPaths = ['/signin', '/limitedfeatures', '/unlimitedfeatures', '/unlimited365features', '/freetrial', "/AboutUsLanding", "/AppInfoLanding", "/AskPermissionLanding", "/ChangePasswordLanding", "/ChangeUsernameLanding", "/ContactUsLanding", "/EntrancePageLanding", "/ForgotPasswordLanding", "/HomeLanding", "/LanguagesLanding", "/MarkLeaveLanding", "/MyLogbookLanding", "/MyPermissionsLanding", "/NotificationLanding", "/ProfileLanding", "/ProfilePictureUploadLanding", "/ResetPasswordLanding", "/SettingsLanding", "/SignInLanding", "/SuccessLanding", "/ThemeToggleLanding", "/TypeCodeLanding", "/FreeTrialLanding", "/LimitedFeaturesLanding", "/UnLimitedFeaturesLanding", "/LandingPageLanding", "/admin.dashboard", "/admin.users", "/admin.usersprofile", "/admin.doors", "/admin.doorsprofile", "/admin.create-door", "/admin.settings", "/admin.profile", "/admin", "/checkout", "/notify", "/trialform"
  ]; // Add more pages as needed




  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            // Token is expired
            localStorage.removeItem('token');
            setUser(null);
            if (!allowedPaths.includes(location.pathname)) {
              navigate('/signin');
            }
          } else {
            const { data } = await axios.get('/api/profile', {
              headers: { Authorization: `Bearer ${token}` },
            });
            setUser(data);
          }
        } catch (error) {
          console.log('Error fetching user:', error);
          setUser(null);
          if (!allowedPaths.includes(location.pathname)) {
            navigate('/');
          }
        }
      } else {
        if (!allowedPaths.includes(location.pathname)) {
          navigate('/');
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, [navigate, location.pathname]); // Include `location.pathname` to track changes

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
