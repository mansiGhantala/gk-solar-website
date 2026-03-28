import { useState } from "react";
import gklogo from "../assets/gklogo.png"
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown,Instagram, Mail, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: "On Grid Solar Rooftop Systems", path: "/services/on-grid-solar" },
    { name: "Ground Mounted Solar Power Plants", path: "/services/ground-mounted" },
  ];

  return (
    <>
     <div className="bg-primary text-primary-foreground py-2 px-4 border-b border-white/10">
  <div className="container mx-auto flex justify-center items-center text-sm">

    <div className="flex items-center gap-6 flex-wrap justify-center">

      {/* Email */}
      <a
        href="mailto:gkenterprise900@gmail.com"
        className="flex items-center gap-2 hover:text-secondary transition-all duration-200"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden md:inline">gkenterprise900@gmail.com</span>
      </a>

      {/* Divider */}
      <div className="h-4 w-px bg-white/20 hidden md:block" />

      {/* Phone */}
      <a
        href="tel:+919274312554"
        className="flex items-center gap-2 hover:text-secondary transition-all duration-200"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden md:inline">+91 92743-12554</span>
      </a>

      {/* Divider */}
      <div className="h-4 w-px bg-white/20 hidden md:block" />

      {/* Instagram */}
      <a
        href="https://www.instagram.com/gkenterprise.solar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-secondary transition-all duration-200"
      >
        <Instagram className="h-5 w-5" />
        <span className="hidden md:inline">Instagram</span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/Gkenterprise-Solar" target="_blank" rel="noopener noreferrer"       className="flex items-center gap-2 hover:text-secondary transition-all duration-200"
      >
        <Facebook className="h-5 w-5" />
        <span className="hidden md:inline">Facebook</span>
      </a>

    </div>

  </div>
</div>

      {/* Main Navigation */}
      <nav className="bg-card shadow-soft sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 d-flex" >
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary flex justify-center items-center" >
                            <img src={gklogo} className="logo" alt="gklogo" style={{ width: "50px", paddingRight: "5px" }} />
             {/* Hidden on mobile */}
              <span className="hidden sm:inline-block">
                <span style={{ color: "#F2B857" }}>GK</span>
                <span style={{ color: "#31C9AC", marginLeft: "4px" }}>Enterprise</span>
              </span>
            </Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
  
              <Link
                to="/about"
                className={`font-medium transition-smooth ${location.pathname === "/about" ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium text-base bg-transparent text-foreground hover:text-primary transition-smooth">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-card">
                        {services.map((service) => (
                          <li key={service.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-muted hover:text-primary"
                              >
                                <div className="text-sm font-medium leading-none">{service.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                to="/projects"
                className={`font-medium transition-smooth ${location.pathname === "/projects" ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                Projects
              </Link>
              <Link
                to="/gallery"
                className={`font-medium transition-smooth ${location.pathname === "/gallery" ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                Gallery
              </Link>
              {/* <Link
                to="/blog"
                className={`font-medium transition-smooth ${location.pathname === "/blog" ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                Blog
              </Link> */}
              {/* <Link
                to="/contact"
                className={`font-medium transition-smooth ${location.pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
              >
                Contact
              </Link> */}
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
                <Link
                  to="/contact"

                >
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block py-2 font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="block py-2 font-medium text-foreground hover:text-primary">
                About Us
              </Link>
              <div>
                <div className="py-2 font-medium text-foreground">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/projects" className="block py-2 font-medium text-foreground hover:text-primary">
                Projects
              </Link>
              <Link to="/gallery" className="block py-2 font-medium text-foreground hover:text-primary">
                Gallery
              </Link>
              <Link to="/blog" className="block py-2 font-medium text-foreground hover:text-primary">
                Blog
              </Link>
              <Link to="/contact" className="block py-2 font-medium text-foreground hover:text-primary">
                Contact
              </Link>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
