import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rooftopImage from "@/assets/rooftop-system.jpg";
import groundMountedImage from "@/assets/ground-mounted-solar.jpg";
import agri_land3 from "@/assets/agri_land3.jpg";
import agri_land6 from "@/assets/agri_land6.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("all");

const projects = [
  {
    title: "Asha Chiragkumar Gorasiya",
    category: "ground-mounted",
    capacity: "1.25 MW",
    location: "Timana",
    date: "January 2025",
    description: "Ground-mounted solar installation for efficient energy generation.",
    image: agri_land3
  },
  {
    title: "Kakadium LLP",
    category: "ground-mounted",
    capacity: "3.5 MW",
    location: "Tana",
    date: "December 2025",
    description: "Large-scale solar project with optimized land utilization.",
    image: agri_land3
  },
  {
    title: "Urvashi Hardik Gorasiya",
    category: "ground-mounted",
    capacity: "1.25 MW",
    location: "Timana",
    date: "January 2025",
    description: "Efficient ground-mounted solar system for consistent output.",
    image: agri_land3
  },
  {
    title: "Shree Bahucharaji Tex",
    category: "ground-mounted",
    capacity: "0.3 MW",
    location: "Jhagadiya",
    date: "December 2025",
    description: "Compact solar installation for industrial use.",
    image: agri_land3
  },
  {
    title: "Rijiya Enterprise",
    category: "ground-mounted",
    capacity: "0.7 MW",
    location: "Jhagadiya",
    date: "December 2025",
    description: "Reliable solar system for small-scale operations.",
    image: agri_land3
  },
  {
    title: "Vaishnvi Tex",
    category: "ground-mounted",
    capacity: "0.8 MW",
    location: "Jhagadiya",
    date: "December 2025",
    description: "Industrial solar solution with optimized performance.",
    image: agri_land3
  },
  {
    title: "Devi Darshan Processors",
    category: "ground-mounted",
    capacity: "0.8 MW",
    location: "Jhagadiya",
    date: "December 2025",
    description: "Sustainable solar setup for processing units.",
    image: agri_land3
  },
  {
    title: "Siddhi Vinayak Tex",
    category: "ground-mounted",
    capacity: "1.0 MW",
    location: "Jhagadiya",
    date: "December 2025",
    description: "Efficient solar system designed for industrial load.",
    image: agri_land3
  },
  {
    title: "Banke Bihari Creation",
    category: "ground-mounted",
    capacity: "0.55 MW",
    location: "Jhagadiya",
    date: "December 2025",
    description: "Cost-effective solar energy solution.",
    image: agri_land3
  },
  {
    title: "Shan Textile Pvt Ltd",
    category: "ground-mounted",
    capacity: "1.86 MW",
    location: "Jhagadiya",
    date: "February 2025",
    description: "High-capacity solar plant for textile industry.",
    image: agri_land3
  },
  {
    title: "Maruti Metallic",
    category: "ground-mounted",
    capacity: "2 MW",
    location: "Jhagadiya",
    date: "February 2025",
    description: "Robust solar installation for heavy industrial usage.",
    image: agri_land3
  },
  {
    title: "Sahajand Filament",
    category: "ground-mounted",
    capacity: "2 MW",
    location: "Jhagadiya",
    date: "February 2025",
    description: "Efficient solar setup for manufacturing units.",
    image: agri_land3
  },
  {
    title: "Safron Jari Industries Pvt Ltd",
    category: "ground-mounted",
    capacity: "1.5 MW",
    location: "Jhagadiya",
    date: "February 2025",
    description: "Industrial solar project ensuring energy savings.",
    image: agri_land3
  }
];


  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors
          </p>
        </div>
      </section>

      {/* Filter Section */}
      {/* <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "residential" ? "default" : "outline"}
              onClick={() => setFilter("residential")}
              className={filter === "residential" ? "bg-primary" : ""}
            >
              Residential
            </Button>
            <Button
              variant={filter === "commercial" ? "default" : "outline"}
              onClick={() => setFilter("commercial")}
              className={filter === "commercial" ? "bg-primary" : ""}
            >
              Commercial
            </Button>
            <Button
              variant={filter === "industrial" ? "default" : "outline"}
              onClick={() => setFilter("industrial")}
              className={filter === "industrial" ? "bg-primary" : ""}
            >
              Industrial
            </Button>
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover:shadow-strong transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.capacity}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {project.location} • {project.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 gradient-eco text-accent-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold mb-2">50MW+</div>
              <div className="text-xl">Total Capacity Installed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Tons CO₂ Saved Annually</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Projects;
