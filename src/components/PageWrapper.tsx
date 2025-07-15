import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

interface PageWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, delay = 1500 }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // 👈 detect route change

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
  }, [location.pathname, delay]); // 👈 run on path change

  if (loading) return <Loader />;
  return <>{children}</>;
};

export default PageWrapper;
