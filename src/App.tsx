import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import LogoLoader from "@/components/LogoLoader";

// pages...
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import OnGridSolar from "./pages/services/OnGridSolar";
import GroundMounted from "./pages/services/GroundMounted";
import Maintenance from "./pages/services/Maintenance";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  // ✅ Loader only first time
  useEffect(() => {
    if (sessionStorage.getItem("introPlayed")) {
      setLoading(false);
    } else {
      sessionStorage.setItem("introPlayed", "true");
    }
  }, []);

  return (
    <>
      {loading ? (
        <LogoLoader onFinish={() => setLoading(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/on-grid-solar" element={<OnGridSolar />} />
                  <Route path="/services/ground-mounted" element={<GroundMounted />} />
                  <Route path="/services/maintenance" element={<Maintenance />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </motion.div>
      )}
    </>
  );
};

export default App;