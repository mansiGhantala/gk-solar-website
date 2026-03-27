import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to the very top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // You can change to "smooth"
    });

    // Also scroll any scrollable containers (for safety)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
