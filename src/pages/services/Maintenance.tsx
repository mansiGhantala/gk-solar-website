import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import maintenanceImage from "@/assets/maintenance-service.jpg";

const Maintenance = () => {
  const services = [
    {
      title: "Regular Inspections",
      description: "Comprehensive system checks to identify potential issues before they become problems",
      features: ["Quarterly or annual visits", "Performance analysis", "Component testing", "Detailed reports"]
    },
    {
      title: "Panel Cleaning",
      description: "Professional cleaning to maintain optimal efficiency and power output",
      features: ["Water-fed pole cleaning", "Non-abrasive methods", "Safety certified", "Scheduled service"]
    },
    {
      title: "Performance Monitoring",
      description: "Continuous tracking of system performance with alerts for anomalies",
      features: ["Real-time data", "Remote diagnostics", "Efficiency tracking", "Energy production reports"]
    },
    {
      title: "Repairs & Replacements",
      description: "Quick response to any system issues with quality replacement parts",
      features: ["Emergency service", "OEM parts", "Warranty support", "Expert technicians"]
    }
  ];

  const plans = [
    {
      name: "Basic Plan",
      price: "$199",
      period: "per visit",
      features: [
        "Visual inspection",
        "Performance check",
        "Basic cleaning",
        "System report"
      ]
    },
    {
      name: "Standard Plan",
      price: "$499",
      period: "quarterly",
      features: [
        "Everything in Basic",
        "Deep cleaning",
        "Component testing",
        "Priority support",
        "Discount on repairs"
      ]
    },
    {
      name: "Premium Plan",
      price: "$1,499",
      period: "annually",
      features: [
        "Everything in Standard",
        "24/7 monitoring",
        "Emergency response",
        "Free minor repairs",
        "Extended warranty"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Maintenance & Service</h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up">
              Keep your solar system running at peak performance with our comprehensive maintenance and 
              support services. Protect your investment and maximize energy production.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              {/* <img
                src={maintenanceImage}
                alt="Solar Maintenance"
                className="w-full rounded-lg shadow-strong"
              /> */}
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Professional Solar Care</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Regular maintenance is essential to ensure your solar system operates efficiently and lasts for 
                its full 25-30 year lifespan. Our expert technicians provide comprehensive care to keep your 
                system in optimal condition.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From routine cleaning and inspections to repairs and performance optimization, we handle all 
                aspects of solar system maintenance. Our services help prevent costly breakdowns and ensure 
                maximum energy production year-round.
              </p>
              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
                  Schedule Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Maintenance Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Maintenance Plans */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Maintenance Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`text-center animate-fade-in-up ${index === 1 ? 'border-primary shadow-strong' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8">
                    {index === 1 && (
                      <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${index === 1 ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'} text-primary-foreground`}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Regular Maintenance Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Maximize Efficiency", description: "Clean panels can improve output by 15-25%" },
              { title: "Extend Lifespan", description: "Proper care ensures your system lasts 25+ years" },
              { title: "Prevent Costly Repairs", description: "Early detection saves money on major repairs" },
              { title: "Maintain Warranty", description: "Many warranties require regular maintenance" },
              { title: "Safety Assurance", description: "Identify and fix potential safety hazards" },
              { title: "ROI Protection", description: "Protect your investment and savings" }
            ].map((reason, index) => (
              <Card key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="pt-8">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Keep Your System Running Strong</h2>
          <p className="text-xl mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Don't wait for problems to arise. Schedule regular maintenance and enjoy peace of mind.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Maintenance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Maintenance;
