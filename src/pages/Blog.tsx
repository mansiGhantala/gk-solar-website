import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import rooftopImage from "@/assets/rooftop-system.jpg";
import groundMountedImage from "@/assets/ground-mounted-solar.jpg";
import heroImage from "@/assets/hero-solar-panels.jpg";

const Blog = () => {
  const posts = [
    {
      slug: "benefits-of-solar-energy",
      title: "Top 10 Benefits of Solar Energy for Your Home",
      excerpt: "Discover why homeowners are switching to solar energy and how it can benefit your household financially and environmentally.",
      image: heroImage,
      author: "John Smith",
      date: "March 15, 2024",
      category: "Solar Energy Basics"
    },
    {
      slug: "choosing-right-solar-system",
      title: "How to Choose the Right Solar System for Your Property",
      excerpt: "A comprehensive guide to selecting the perfect solar system based on your energy needs, budget, and property characteristics.",
      image: rooftopImage,
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Buyer's Guide"
    },
    {
      slug: "solar-maintenance-tips",
      title: "Essential Solar Panel Maintenance Tips for Maximum Efficiency",
      excerpt: "Learn how to maintain your solar panels to ensure optimal performance and longevity with these professional tips.",
      image: rooftopImage,
      author: "Mike Davis",
      date: "March 5, 2024",
      category: "Maintenance"
    },
    {
      slug: "commercial-solar-roi",
      title: "Understanding ROI: Commercial Solar Installations",
      excerpt: "An in-depth analysis of return on investment for businesses considering solar energy solutions.",
      image: groundMountedImage,
      author: "Emily Chen",
      date: "February 28, 2024",
      category: "Commercial Solar"
    },
    {
      slug: "solar-technology-trends",
      title: "Latest Solar Technology Trends in 2024",
      excerpt: "Explore the cutting-edge innovations and trends shaping the future of solar energy technology.",
      image: heroImage,
      author: "Robert Williams",
      date: "February 20, 2024",
      category: "Technology"
    },
    {
      slug: "government-solar-incentives",
      title: "Guide to Government Solar Incentives and Subsidies",
      excerpt: "Everything you need to know about available tax credits, rebates, and incentives for solar installations.",
      image: rooftopImage,
      author: "Lisa Anderson",
      date: "February 15, 2024",
      category: "Finance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Solar Energy Blog</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Stay informed with the latest news, tips, and insights about solar energy and sustainable living
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="overflow-hidden animate-fade-in">
            <div className="grid md:grid-cols-2">
              <div className="h-full min-h-[300px]">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="text-sm text-secondary font-semibold mb-2">{posts[0].category}</div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{posts[0].date}</span>
                  </div>
                </div>
                <Link to={`/blog/${posts[0].slug}`}>
                  <Button className="bg-primary hover:bg-primary/90">
                    Read More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group hover:shadow-strong transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 gradient-eco text-accent-foreground">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 text-accent-foreground/90">
            Get the latest solar energy news, tips, and exclusive offers delivered to your inbox
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
