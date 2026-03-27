import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rooftopImage from "@/assets/rooftop-system.jpg";
import groundMountedImage from "@/assets/ground-mounted-solar.jpg";

const Services = () => {
  const services = [
    {
      title: "On Grid Solar Rooftop Systems",
      description: "Complete solar rooftop solutions for residential and commercial buildings. Our on-grid systems connect directly to the utility grid, allowing you to save on electricity bills while contributing clean energy back to the grid.",
      features: [
        "High-efficiency solar panels",
        "Grid-tie inverters",
        "Net metering capability",
        "Professional installation",
        "Comprehensive warranty"
      ],
      image: rooftopImage,
      link: "/services/on-grid-solar",
    },
    {
      title: "Ground Mounted Solar Power Plants",
      description: "Large-scale solar power plants designed for industrial and utility applications. We handle everything from site assessment and design to installation and commissioning.",
      features: [
        "Custom engineering design",
        "Land assessment & optimization",
        "High-capacity installations",
        "Performance monitoring systems",
        "Long-term maintenance support"
      ],
      image: groundMountedImage,
      link: "/services/ground-mounted",
    },
 
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Comprehensive solar energy solutions for residential, commercial, and industrial applications
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={`animate-fade-in ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full rounded-lg shadow-strong"
                />
              </div>
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <Card className="text-center">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project is unique. Contact us to discuss your specific requirements and get a customized solution.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
