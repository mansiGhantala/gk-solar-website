import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import groundMountedImage from "@/assets/ground-mounted-solar.jpg";

const GroundMounted = () => {
  const features = [
    "Custom engineering and design",
    "Comprehensive land assessment",
    "High-capacity power generation",
    "Advanced tracking systems available",
    "Weather monitoring integration",
    "Remote performance monitoring",
    "Scalable from 100kW to multi-MW",
    "25+ year operational lifespan"
  ];

  const applications = [
    { title: "Industrial Facilities", description: "Power manufacturing plants and industrial operations" },
    { title: "Commercial Complexes", description: "Supply energy to shopping centers and office parks" },
    { title: "Agricultural Operations", description: "Support farms and agricultural processing facilities" },
    { title: "Utility Scale", description: "Feed power directly into the electrical grid" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground ">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Ground Mounted Solar Power Plants</h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up">
              Large-scale solar solutions designed for maximum power generation. Perfect for industrial facilities, 
              commercial complexes, and utility-scale applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <img
                src={groundMountedImage}
                alt="Ground Mounted Solar Plant"
                className="w-full rounded-lg shadow-strong"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Large-Scale Solar Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ground-mounted solar power plants are ideal for businesses and organizations that need significant 
                energy capacity. These systems are installed on open land, allowing for optimal panel orientation 
                and easy maintenance access.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We handle every aspect of your solar power plant project, from initial feasibility studies and 
                land assessment to engineering design, installation, and commissioning. Our team ensures your 
                investment delivers maximum returns for decades to come.
              </p>
              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">System Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="pt-6 flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Applications Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Ideal Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">{app.title}</h3>
                    <p className="text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Assessment", description: "Comprehensive evaluation of land and energy requirements" },
              { step: "02", title: "Design & Engineering", description: "Custom system design optimized for your location" },
              { step: "03", title: "Installation", description: "Professional installation by certified technicians" },
              { step: "04", title: "Commissioning", description: "Testing, activation, and performance verification" }
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl font-bold text-primary/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Solar Power Plant?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Contact us for a comprehensive feasibility study and project proposal tailored to your requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GroundMounted;
