import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rooftopImage from "@/assets/rooftop_own.jpg.png";

const OnGridSolar = () => {
  const features = [
    "Grid-tied system for maximum efficiency",
    "Net metering capability to sell excess power",
    "High-efficiency monocrystalline solar panels",
    "Premium inverters with 5-10 year warranty",
    "Professional installation by certified technicians",
    "Real-time monitoring and analytics",
    "25-year panel performance warranty",
    "Significant reduction in electricity bills"
  ];

  const benefits = [
    "Save 50-90% on electricity costs",
    "Quick ROI typically within 3-5 years",
    "Increase property value",
    "Reduce carbon footprint",
    "Government incentives and subsidies available",
    "Low maintenance requirements"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto ">
          <div className="max-w-3xl ">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">On Grid Solar Rooftop Systems</h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up">
              Transform your rooftop into a clean energy powerhouse. Our on-grid solar rooftop systems connect 
              seamlessly with the utility grid, allowing you to generate your own power while maintaining grid connectivity.
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
                src={rooftopImage}
                alt="Solar Rooftop System"
                className="w-full rounded-lg shadow-strong"
              />
            </div>
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">What is an On-Grid Solar System?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                An on-grid or grid-tied solar system is connected to the local utility power grid. During the day, 
                your solar panels generate electricity that powers your home or business. Any excess energy is fed 
                back into the grid, earning you credits through net metering.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When your solar panels aren't producing enough power (like at night or during cloudy days), you 
                automatically draw electricity from the grid. This ensures you always have power when you need it.
              </p>
              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
                  Request a Quote
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

          {/* Benefits Section */}
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-eco text-accent-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Install Your Solar Rooftop System?</h2>
          <p className="text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
            Get a free site assessment and customized proposal. Our experts will help you determine the 
            perfect system size for your energy needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnGridSolar;
