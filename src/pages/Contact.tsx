import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnnozbal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "", service: "" });
      } else {
        toast.error("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Get in touch with our team of solar experts. We're here to answer your questions and help you start your solar journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card>
                <CardContent className="pt-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Full Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your E-mail"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>

                    {/* Inquiry Type Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-input bg-background rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service...</option>
                        <option value="On Grid Solar Rooftop Systems">On Grid Solar Rooftop Systems</option>
                        <option value="Ground Mounted Solar Power Plants">Ground Mounted Solar Power Plants</option>
                        {/* Uncomment if you want more */}
                        {/* <option value="Solar Water Heaters">Solar Water Heaters</option> */}
                        {/* <option value="Maintenance & Service">Maintenance & Service</option> */}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your solar energy needs..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Have questions about solar energy? Our team of experts is ready to help you make the switch to clean, renewable energy.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">


                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Head Office</h3>
                        <p className="text-muted-foreground">
                          346,3rd floor,AR Mall Near Sudama Chowk<br />
                          Mota varachha, Surat 394101
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Branch Office</h3>
                        <p className="text-muted-foreground">
                          31, Mandavray Complex,Mahuva Chokdi <br />
                          Taluka-Talaja, Dist-Bhavnagar 394250
                        </p>
                      </div>
                    </div>


                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+91 92743-12554</p>
                        {/* <p className="text-muted-foreground">+1 (234) 567-891</p> */}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">gkenterprise900@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:30 PM</p>
                        {/* <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p> */}
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.4209365706647!2d72.87034267471994!3d21.23536988065123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa33d615b5d%3A0x13e224a83374a500!2sAR%20Mall%20%26%20Multiplex!5e1!3m2!1sen!2sin!4v1761889323821!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Chat on WhatsApp?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Send us a message on WhatsApp for quick responses
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => {
              const phoneNumber = "9274312554"; // 👈 your WhatsApp number
              const message = "I have an inquiry regarding the solar."; // 👈 default message
              const encodedMessage = encodeURIComponent(message);
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
              window.open(whatsappURL, "_blank");
            }}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Contact;
