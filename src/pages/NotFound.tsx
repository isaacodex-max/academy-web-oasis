import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Renders a 404 Not Found page for unmatched routes.
 *
 * This component logs an error to the console whenever a user attempts to access
 * a non-existent route, displaying a user-friendly message and a link to return
 * to the home page.
 *
 * @returns {JSX.Element} The rendered 404 Not Found page.
 */
function NotFound(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
}

/**
 * NotFound component.
 *
 * Renders a page or message indicating that the requested resource or route was not found (404 error).
 *
 * @component
 * @returns {JSX.Element} The rendered NotFound page.
 */
export default NotFound;
