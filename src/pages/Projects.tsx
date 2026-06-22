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
import msgagan from "@/assets/projectImage/msgagan.webp";
import arham from "@/assets/projectImage/Arham.webp";
import pnr from "@/assets/projectImage/Pnr.webp";
import msshree from "@/assets/projectImage/MsShree.webp";
import Sssales from "@/assets/projectImage/Sssales.webp";
import shreeMahavir from "@/assets/projectImage/Shreemahavir.webp";
import yashJari from "@/assets/projectImage/yashjari.webp";
import sRMetallizers from "@/assets/projectImage/SRMetallizers.webp";
import shreeVasudev from "@/assets/projectImage/ShreeVasudev.webp";
import deepknit from "@/assets/projectImage/Deepknit.webp";
import vatsalya from "@/assets/projectImage/Vatsalya.webp";
import vishwaprem from "@/assets/projectImage/Vishwaprem.webp";
const Projects = () => {
  const [filter, setFilter] = useState("all");

const projects = [
  {
    title: "M/S Gagan Silk Mills Pvt. Ltd",
    category: "ground-mounted",
    capacity: "2.4 MW",
    location: "Asnad, Olpad",
    date: "December 2025",
    description: "Ground mount system positioned at ideal tilt for maximum sunlight and power output.",
    image: msgagan
  },
  {
    title: "Vishwaprem Dyeing and Printing Mills Pvt",
    category: "ground-mounted",
    capacity: "1.5 MW",
    location: "Asnad, Olpad",
    date: "December 2025",
    description: "Solar panels mounted on fixed or tracking ground systems.",
    image: vishwaprem
  },
  {
    title: "PNR Industries Ltd",
    category: "ground-mounted",
    capacity: "3.5 MW",
    location: "Kukarmunda, Tapi",
    date: "August 2025",
    description: "Lower cost per kW using centralized inverters and simple wiring.",
    image: pnr
  },
  {
    title: "Arham Synthetics",
    category: "ground-mounted",
    capacity: "430 kW",
    location: "Asnad, Olpad",
    date: "August 2025",
    description: "High-efficiency PV modules connected in strings.",
    image: arham
  },
  {
    title: " M/S Shree Kalpatru Textiles",
    category: "ground-mounted",
    capacity: "1 MW",
    location: "Asnad, Olpad",
    date: "December 2025",
    description: "Ground-mounted solar plant reducing dependency on grid power.",
    image: msshree
  },
  {
    title: "Shree Mahavir Roll Tech Ltd",
    category: "ground-mounted",
    capacity: "2.6 MW",
    location: "Asnad, Olpad",
    date: "December 2025",
    description: "Uses bifacial panels capturing sunlight from both sides.",
    image: shreeMahavir
  },
  {
    title: "Yash Jari Industries",
    category: "ground-mounted",
    capacity: "2 MW",
    location: "Jhagadia, Bharuch",
    date: "July 2025",
    description: "Smart inverter provides voltage control and frequency regulation.",
    image: yashJari
  },
  {
    title: "S R Metallizers",
    category: "ground-mounted",
    capacity: "2.3 MW",
    location: "Jhagadia, Bharuch",
    date: "July 2025",
    description: "Industrial-scale solar system for efficient energy production.",
    image: sRMetallizers
  },
  {
    title: "Shree Vasudev Processors Pvt Ltd",
    category: "ground-mounted",
    capacity: "1.5 MW",
    location: "Asnad, Olpad",
    date: "August 2025",
    description: "Reliable solar installation for industrial operations.",
    image: shreeVasudev
  },
  {
    title: "Sonali Dyeing and Printing Pvt Ltd",
    category: "ground-mounted",
    capacity: "2.2 MW",
    location: "Asnad, Olpad",
    date: "June 2025",
    description: "Efficient solar system for textile processing unit.",
    image: agri_land3
  },
  {
    title: "S S Sales",
    category: "ground-mounted",
    capacity: "2.5 MW",
    location: "Asnad, Olpad",
    date: "2025",
    description: "Large-scale solar installation for commercial use.",
    image: Sssales
  },
  {
    title: "Deep Knit",
    category: "ground-mounted",
    capacity: "1.8 MW",
    location: "Asnad, Olpad",
    date: "August 2025",
    description: "Ground-mounted system designed for high efficiency.",
    image: deepknit
  },
  {
    title: "Vatsalya Paper Industries LLP",
    category: "ground-mounted",
    capacity: "5 MW",
    location: "Kukarmunda, Tapi",
    date: "August 2025",
    description: "Large-scale solar project for industrial energy needs.",
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
