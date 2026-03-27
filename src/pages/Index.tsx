import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sun, Zap, Shield, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-solar-panels.jpg";
import rooftopImage from "@/assets/rooftop-system.jpg";
import agriland from "@/assets/rooftop_own.jpg.png";
import groundMountedImage from "@/assets/ground-mounted-solar.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";
import bhuriyo from "@/assets/technician-engineer-checks-maintenance-solar-cell-panels.jpg";
import ground from "@/assets/agri_land4.jpg";
import rooptopService from "@/assets/rooftop_service.png";
const Index = () => {
  const services = [
    {
      title: "Solar Rooftop Systems",
      description: "High-efficiency on-grid solar rooftop solutions for residential and commercial buildings.",
      image: rooptopService,
      link: "/services/on-grid-solar",
    },
    {
      title: "Ground Mounted Plants",
      description: "Large-scale ground-mounted solar power plants for industrial and utility applications.",
      image: ground,
      link: "/services/ground-mounted",
    },
    // {
    //   title: "Maintenance & Service",
    //   description: "Professional maintenance and repair services to keep your solar systems running optimally.",
    //   image: maintenanceImage,
    //   link: "/services/maintenance",
    // },
  ];

  const features = [
    {
      icon: Sun,
      title: "High Efficiency",
      description: "Premium solar panels with industry-leading efficiency ratings and performance guarantees.",
    },
    {
      icon: Zap,
      title: "Fast Installation",
      description: "Quick and professional installation by our certified team of experts.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "We use only the highest quality components with comprehensive warranties.",
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Our team consists of certified professionals with years of experience.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Installer & Service Provider of Various{" "}
              <span className="text-secondary123">Solar Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Harness the power of the sun with our professional solar energy solutions. 
              Quality installation and service for a sustainable future.
            </p>
            <div className="flex flex-wrap gap-4">

              <Link to="/Contact">

              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow animate-glow"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              <Link to="/projects">

              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                View Projects
              </Button>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">
                Welcome to <span className="text-primary">Solar Energy</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with the mission to create a sustainable future, we are a leading installer and service provider 
                for residential, commercial, and industrial solar solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We strongly believe in quality service and total customer satisfaction. Our team of highly experienced 
                professionals specializes in solar installation, wiring, fabrication, and complete solar system solutions. 
                We offer comprehensive engineering, construction, design, installation, and commissioning services for 
                solar projects of any size.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  Read More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <img
                src={agriland}
                alt="Solar Installation"
                className="w-full h-64 object-cover rounded-lg shadow-medium"
              />
              <img
                src={groundMountedImage}
                alt="Solar Plant"
                className="w-full h-64 object-cover rounded-lg shadow-medium mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground">
              To save energy and build a sustainable future, choose us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-strong transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
    <section className="py-20 px-4">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="text-xl text-muted-foreground">
        Comprehensive solar energy solutions tailored to your needs
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      {services.map((service, index) => (
        <Card
          key={index}
          className="max-w-md overflow-hidden group hover:shadow-lg transition-all duration-500 animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <Link to={service.link}>
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step towards energy independence and sustainability. 
            Get a free consultation and quote from our experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
              </Link>
            {/* <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
