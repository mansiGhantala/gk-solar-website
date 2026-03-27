import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Left side + Right side */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* LEFT SIDE - GK Enterprise */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-foreground">GK</span>
              <span className="text-secondary">Enterprise</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Leading provider of solar energy solutions for a sustainable
              future. Quality installation and maintenance services for
              residential, commercial, and industrial needs.
            </p>
            {/* <div className="flex gap-4">

              <a href="#" className="hover:text-secondary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              
              <a href="#" className="hover:text-secondary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}

<div className="flex space-x-4">

{/* <a
    href="https://www.facebook.com/people/Gkenterprise-Solar"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-secondary transition-smooth"
>
  <Facebook className="h-5 w-5" />
</a> */}

<a
  href="https://www.instagram.com/gkenterprise.solar"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-secondary transition-smooth"
>
  <Instagram className="h-5 w-5" />
</a>

</div>
          </div>

          {/* RIGHT SIDE - Contact + Services */}
          <div className="lg:w-1/2 flex flex-col sm:flex-row justify-end gap-12">


                 {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/services/on-grid-solar"
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    Solar Rooftop Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/ground-mounted"
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    Ground Mounted Plants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                    maintanance Repair
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                  346-3rd floor AR Mall Near Sudama Chowk <br /> Mota varachha, Surat 394101
                  </span>  
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a
                    href="tel:+1234567890"
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >+91 92743-12554</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a
                    href="mailto:info@yoursolarcompany.com"
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                  >
                  gkenterprise900@gmail.com


                  </a>
                </li>
              </ul>
            </div>

     
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Your Solar Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-secondary transition-smooth"
            >
              Terms of Use
            </Link>
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-secondary transition-smooth"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
