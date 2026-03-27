import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Terms of Use</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> March 2024
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to these terms, please do not use this website.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on our website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p>Under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>3. Services</h2>
            <p>
              We provide solar energy installation and maintenance services. All service agreements are subject to separate 
              contracts and terms that will be provided at the time of engagement.
            </p>

            <h2>4. Accuracy of Information</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We do 
              not warrant that any of the materials on our website are accurate, complete, or current. We may make changes 
              to the materials contained on our website at any time without notice.
            </p>

            <h2>5. Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the contents of any 
              such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such 
              linked website is at the user's own risk.
            </p>

            <h2>6. Modifications</h2>
            <p>
              We may revise these terms of use for our website at any time without notice. By using this website you are 
              agreeing to be bound by the then current version of these terms of use.
            </p>

            <h2>7. Warranty and Liability</h2>
            <p>
              All solar installations come with manufacturer warranties as specified in your service agreement. Our 
              installation workmanship is guaranteed for the period specified in your contract. We are not liable for 
              any consequential damages resulting from the use of our services beyond the scope defined in your service 
              agreement.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction] 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <ul>
              <li>Email: gkenterprise900@gmail.com</li>
              <li>Phone: +91 92743-12554</li>
              <li>Address:                  
                 {/* <span className="text-primary-foreground/80"> */}
                  346-3rd floor, AR Mall Near Sudama Chowk <br /> Mota varachha, Surat 395006
                  {/* </span> */}
                  </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
