import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-solar-panels.jpg";

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, fetch post data based on slug
  const post = {
    title: "Top 10 Benefits of Solar Energy for Your Home",
    author: "John Smith",
    date: "March 15, 2024",
    image: heroImage,
    content: `
      <p>Solar energy has become increasingly popular among homeowners looking to reduce their carbon footprint and save money on electricity bills. In this comprehensive guide, we'll explore the top 10 benefits of installing solar panels on your home.</p>

      <h2>1. Significant Cost Savings</h2>
      <p>One of the most compelling reasons to go solar is the potential for substantial savings on your electricity bills. With solar panels, you can generate your own clean energy and reduce your reliance on utility companies. Many homeowners see a reduction of 50-90% in their electricity costs.</p>

      <h2>2. Environmental Impact</h2>
      <p>Solar energy is clean, renewable, and produces zero emissions. By choosing solar, you're actively contributing to a healthier planet and reducing your carbon footprint. A typical residential solar system can offset approximately 100 tons of CO2 over its lifetime.</p>

      <h2>3. Increase Property Value</h2>
      <p>Studies show that homes with solar panel systems sell for more than homes without them. Solar panels are viewed as upgrades, just like a renovated kitchen or finished basement.</p>

      <h2>4. Energy Independence</h2>
      <p>Solar panels give you control over your energy production and consumption. You're less vulnerable to power outages and fluctuating utility rates.</p>

      <h2>5. Low Maintenance</h2>
      <p>Solar panel systems require minimal maintenance. Regular cleaning and occasional inspections are usually all that's needed to keep your system running efficiently for 25-30 years.</p>

      <h2>6. Government Incentives</h2>
      <p>Many governments offer tax credits, rebates, and other incentives to encourage solar adoption. These can significantly reduce the initial cost of your solar installation.</p>

      <h2>7. Net Metering Benefits</h2>
      <p>With net metering, you can sell excess energy back to the grid, earning credits that offset your electricity costs even further.</p>

      <h2>8. Quick ROI</h2>
      <p>Most residential solar systems pay for themselves within 3-7 years, depending on local electricity rates and available incentives.</p>

      <h2>9. Advanced Technology</h2>
      <p>Modern solar panels are more efficient and affordable than ever. Technological advances continue to improve performance and reduce costs.</p>

      <h2>10. Long-Term Investment</h2>
      <p>Solar panels typically come with 25-year warranties and can last even longer. This makes them an excellent long-term investment for your home.</p>

      <h2>Conclusion</h2>
      <p>The benefits of solar energy for homeowners are clear and compelling. From financial savings to environmental impact, solar power offers advantages that extend well beyond just reducing your electricity bill. If you're considering making the switch to solar, now is an excellent time to explore your options.</p>
    `
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg shadow-strong mb-12"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <article 
            className="prose prose-lg max-w-none animate-fade-in-up"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get a free consultation and find out how much you can save with solar energy
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
              Get Free Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
