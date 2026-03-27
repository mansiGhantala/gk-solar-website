import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 animate-fade-in-up">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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

            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Information about your property and energy needs</li>
              <li>Communication preferences and feedback</li>
              <li>Payment information for our services</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your requests and transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Professional advisers such as lawyers and accountants</li>
              <li>Government authorities when required by law</li>
              <li>Other parties with your consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities. 
              You can control cookies through your browser settings. Our website may not function properly if you disable cookies.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access and receive a copy of your personal information</li>
              <li>Correct or update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you become aware that a child has provided us with personal information, 
              please contact us.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
              privacy policy on this page and updating the "Last Updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <ul>
              <li>Email: gkenterprise900@gmail.com</li>
              <li>Phone: +91 92743-12554</li>
              <li>Address: 346-3rd floor,AR mall near Sudama Chowk <br /> Mota varachha, Surat
                  </li>
            </ul>

            <h2>10. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
              privacy policy, unless a longer retention period is required or permitted by law. When we no longer need 
              your personal information, we will securely delete or anonymize it.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
