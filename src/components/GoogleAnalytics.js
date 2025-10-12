import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    if (measurementId && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, measurementId]);

  return null;
};

export default GoogleAnalytics;

// HOW TO USE:
// 1. Add this to your App.js:
//    import GoogleAnalytics from './components/GoogleAnalytics';
//
// 2. Inside your App component (inside BrowserRouter):
//    <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
//
// 3. Replace G-XXXXXXXXXX with your actual Google Analytics Measurement ID
//
// Example:
// function App() {
//   return (
//     <BrowserRouter>
//       <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
//       <Navbar />
//       <Hero />
//       {/* ... rest of your components */}
//     </BrowserRouter>
//   );
// }

