import { CheckCircle, Target, Eye, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import rooftopImage from "@/assets/gkoffice.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality Service",
      description: "We are committed to delivering the highest quality solar installations and services.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Total customer satisfaction is at the heart of everything we do.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in honest communication and transparent business practices.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience to every project.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Leading the way in solar energy solutions for a sustainable future
          </p>
        </div>
      </section>

      {/* Company Story */}
     <section className="py-12 md:py-20 px-4">
  <div className="container mx-auto">
    {/* Default flex-col: image on top for <768px */}
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
      
      {/* Image */}
      <div className="animate-fade-in w-full md:w-1/2">
        <img
          src={rooftopImage}
          alt="Our Company"
          className="w-full h-auto sm:h-[300px] md:h-[450px] rounded-lg object-top shadow-strong object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="animate-fade-in-up w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-4">
          Founded with a vision to create a cleaner, more sustainable future, we have grown to become 
          a leading provider of solar energy solutions. Our journey began with a simple mission: to make 
          renewable energy accessible to everyone.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground mb-4">
          Over the years, we have successfully completed hundreds of projects ranging from residential 
          rooftop installations to large-scale commercial solar power plants. Our commitment to quality, 
          innovation, and customer satisfaction has earned us the trust of clients across industries.
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          Today, we continue to push the boundaries of solar technology, helping businesses and homeowners 
          reduce their carbon footprint while saving on energy costs.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="animate-fade-in">
              <CardContent className="pt-8">
                <div className="mb-4">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To provide high-quality, sustainable solar energy solutions that empower individuals and 
                  businesses to reduce their environmental impact while achieving energy independence. We strive 
                  to make solar power accessible, affordable, and reliable for everyone.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in-up">
              <CardContent className="pt-8">
                <div className="mb-4">
                  <Eye className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted and innovative solar energy company, leading the transition to renewable 
                  energy across the region. We envision a future where clean, sustainable energy powers every home 
                  and business, creating a healthier planet for generations to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground">
              We combine expertise, quality, and dedication to deliver exceptional solar solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-strong transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 gradient-eco text-accent-foreground">
        <div className="container mx-auto">
          <div className="text-center ">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-accent-foreground/90 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our team. We employ certified professionals 
              with years of experience in solar installation, engineering, and customer service. Every team member 
              is committed to delivering excellence in every project.
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Team Members</div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
