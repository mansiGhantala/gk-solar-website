import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import rooftopImage from "@/assets/rooftop-system.jpg";
import groundMountedImage from "@/assets/ground-mounted-solar.jpg";
import waterHeaterImage from "@/assets/solar-water-heater.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";
import heroImage from "@/assets/hero-solar-panels.jpg";
import agri_land from "@/assets/agri_land.jpg";
import agri_land1 from "@/assets/agri_land1.jpg";
import agri_land2 from "@/assets/agri_land2.jpg";
import agri_land3 from "@/assets/agri_land3.jpg";
import agri_land4 from "@/assets/agri_land4.jpg";
import agri_land5 from "@/assets/agri_land5.jpg";
import agri_land6 from "@/assets/agri_land6.jpg";
import agri_land7 from "@/assets/agri_land7.jpg";
import agri_land8 from "@/assets/agri_land8.jpg";
import agri_land9 from "@/assets/agri_land9.jpg";
import agri_land10 from "@/assets/agri_land10.webp";
import agri_land11 from "@/assets/agri_land11.jpg";
import agri_land13 from "@/assets/agri_land13.jpg";
import agri_land14 from "@/assets/agri_land14.jpg";
import africa from "@/assets/wind-farms-fields.jpg";
import bhuriyo from "@/assets/technician-engineer-checks-maintenance-solar-cell-panels.jpg";
import video1 from "@/assets/videos/video1.mp4";
import video2 from "@/assets/videos/video2.mp4";
import video3 from "@/assets/videos/video3.mp4";

import solar1 from "@/assets/gallery/solar-installation-1.webp";
import solar2 from "@/assets/gallery/solar-installation-2.webp";
import solar3 from "@/assets/gallery/solar-installation-3.webp";
import solar4 from "@/assets/gallery/solar-installation-4.webp";
import solar5 from "@/assets/gallery/solar-installation-5.webp";
import solar6 from "@/assets/gallery/solar-installation-6.webp";
import solar7 from "@/assets/gallery/solar-installation-7.webp";
import solar8 from "@/assets/gallery/solar-installation-8.webp";
import solar9 from "@/assets/gallery/solar-installation-9.webp";
import solar10 from "@/assets/gallery/solar-installation-10.webp";
import solar11 from "@/assets/gallery/solar-installation-11.webp";
import solar12 from "@/assets/gallery/solar-installation-12.webp";
import solar13 from "@/assets/gallery/solar-installation-13.webp";
import solar14 from "@/assets/gallery/solar-installation-14.webp";
import solar15 from "@/assets/gallery/solar-installation-15.webp";
import solar16 from "@/assets/gallery/solar-installation-16.webp";
import solar17 from "@/assets/gallery/solar-installation-17.webp";
const Gallery = () => {
  const [filter, setFilter] = useState("all");

//   const galleryItems =[
//       { image: agri_land13, category: "installations", title: "Tilted Solar Panel Installation" },
//   { image: agri_land14, category: "installations", title: "Rooftop Solar Maintenance Work" },
//   { image: agri_land1, category: "installations", title: "Solar Control Panel Setup" },
//   { image: agri_land2, category: "installations", title: "Electrical Transformer Unit" },
//   { image: agri_land3, category: "installations", title: "Ground Mount Solar Structure" },
//   { image: africa, category: "installations", title: "Rooftop Solar Panel Array" },

//   { image: agri_land4, category: "installations", title: "Foundation Pile Installation" },
//   { image: agri_land5, category: "installations", title: "Solar Farm Field View" },
//   { image: agri_land6, category: "installations", title: "Solar Panel Row Alignment" },
//   { image: agri_land7, category: "installations", title: "Wide Solar Field Installation" },
//   { image: agri_land8, category: "installations", title: "Angled Solar Panel Array" },
//   { image: agri_land9, category: "installations", title: "Power Substation Connection" },
//   { image: agri_land10, category: "installations", title: "Solar Mounting Frame Setup" },
//   { image: agri_land11, category: "installations", title: "Drilling Rig for Foundation" },
//   { image: bhuriyo, category: "installations", title: "Rooftop Solar Panel Array" },
//   { image: rooftopImage, category: "installations", title: "Building Rooftop Solar Setup" },
//   { image: groundMountedImage, category: "installations", title: "Agriculture Land Installation" }
// ];

const galleryItems = [
  { image: solar1, category: "installations", title: "Ground mounted solar structure foundation work" },
  { image: agri_land4, category: "installations", title: "Foundation Pile Installation" },
  { image: solar8, category: "installations", title: "Solar Farm Field View" },
  { image: solar2, category: "installations", title: "Solar Farm Construction Phase" },
  { image: solar13, category: "installations", title: "Large-Scale Solar Energy Farm" },
  { image: solar3, category: "installations", title: "Foundation Construction" },
  { image: solar4, category: "installations", title: "Foundation pile" },
  { image: solar17, category: "installations", title: "Clean Energy Landscape" },
  { image: agri_land14, category: "installations", title: "Solar Plant Electrical Infrastructure Setup" },
  { image: solar16, category: "installations", title: "Solar PV System Installation in Progress" },
  { image: solar11, category: "installations", title: "Solar module wiring installation" },
 { image: solar6, category: "installations", title: "Ground Leveling & Bore Work in Progress" },
  { image: solar7, category: "installations", title: "Ground-Mounted Solar PV Structure Setup" },
  { image: solar9, category: "installations", title: "Solar Panel Row Alignment" },
  { image: solar15, category: "installations", title: "Solar Farm Operational View" },
  { image: solar10, category: "installations", title: "Wide Solar Field Installation" },
        { image: agri_land13, category: "installations", title: "Electrical Transformer Unit" },
  { image: solar12, category: "installations", title: "Power transformer installation at solar substations" },
  { image: solar14, category: "installations", title: "Solar Farm Structural Framework Completed" },
];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Browse through our collection of solar installations, products, and team in action
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
              All Photos
            </Button>
            <Button
              variant={filter === "installations" ? "default" : "outline"}
              onClick={() => setFilter("installations")}
              className={filter === "installations" ? "bg-primary" : ""}
            >
              Installations
            </Button>
            <Button
              variant={filter === "products" ? "default" : "outline"}
              onClick={() => setFilter("products")}
              className={filter === "products" ? "bg-primary" : ""}
            >
              Products
            </Button>
            <Button
              variant={filter === "team" ? "default" : "outline"}
              onClick={() => setFilter("team")}
              className={filter === "team" ? "bg-primary" : ""}
            >
              Our Team
            </Button>
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-smooth cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end">
                  <div className="p-4 text-primary-foreground">
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-muted">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Video Gallery</h2>
    <p className="text-center text-muted-foreground mb-12">
      Watch our installation processes, customer testimonials, and solar energy tutorials
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Video 1 */}
      <div className="aspect-video rounded-lg overflow-hidden shadow-medium bg-black">
        <video
          controls
          muted
          className="w-full h-full object-cover"
          // poster={rooftopImage} 
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 2 */}
      <div className="aspect-video rounded-lg overflow-hidden shadow-medium bg-black">
        <video
          controls
          muted
          className="w-full h-full object-cover"
          // poster={groundMountedImage} 
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video 3 */}
      <div className="aspect-video rounded-lg overflow-hidden shadow-medium bg-black">
        <video
          controls
          muted
          className="w-full h-full object-cover"
          // poster={heroImage} 
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Gallery;
