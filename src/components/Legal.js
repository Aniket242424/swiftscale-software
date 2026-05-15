import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';

const LAST_UPDATED = 'May 15, 2026';
const CONTACT_EMAIL = 'soubhik.das@swiftscalesoftware.com';

const LegalLayout = ({ title, children }) => (
  <div className="App">
    <div className="relative bg-navy">
      <Navbar />
    </div>
    <section className="section-padding bg-navy pt-32">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-white/90">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-3">
            {title}
          </h1>
          <p className="text-white/60 mb-10 text-sm">Last updated: {LAST_UPDATED}</p>
          <div className="space-y-6 leading-relaxed">{children}</div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link to="/" className="text-teal hover:underline">← Back to home</Link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <WhatsAppWidget />
  </div>
);

const SectionH = ({ children }) => (
  <h2 className="text-xl sm:text-2xl font-semibold font-poppins text-white mt-8 mb-3">{children}</h2>
);

export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy">
    <p>
      SwiftScale Software ("we", "us", "our") operates QraftAI and the swiftscalesoftware.com website. This Privacy Policy explains what data we collect and how we use it.
    </p>

    <SectionH>Information We Collect</SectionH>
    <p>
      When you sign up for QraftAI or contact us, we collect your name, email address, and any information you choose to share (such as company name or project details). When you connect QraftAI to your application, we process the data needed to generate and execute test cases on your behalf.
    </p>

    <SectionH>How We Use Your Information</SectionH>
    <p>
      We use your information to deliver and improve QraftAI, respond to your requests, send service-related communications, and meet legal obligations. We do not sell your personal information.
    </p>

    <SectionH>Data Sharing</SectionH>
    <p>
      We share information only with service providers who help us operate QraftAI (such as cloud hosting and email delivery), and only as required to deliver the service. We may disclose information if required by law.
    </p>

    <SectionH>Data Security</SectionH>
    <p>
      We use industry-standard security practices to protect your data, including encryption in transit and access controls. No system is 100% secure, but we work continuously to safeguard your information.
    </p>

    <SectionH>Your Rights</SectionH>
    <p>
      You can request access to, correction of, or deletion of your personal data at any time by emailing us at <a className="text-teal hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>

    <SectionH>Contact</SectionH>
    <p>
      For privacy-related questions, email <a className="text-teal hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>
  </LegalLayout>
);

export const TermsOfService = () => (
  <LegalLayout title="Terms of Service">
    <p>
      These Terms of Service ("Terms") govern your use of QraftAI and the swiftscalesoftware.com website operated by SwiftScale Software. By using our services, you agree to these Terms.
    </p>

    <SectionH>Use of Service</SectionH>
    <p>
      You may use QraftAI only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activity on your account.
    </p>

    <SectionH>Subscription & Payment</SectionH>
    <p>
      Paid plans are billed in advance on a recurring basis. You may cancel at any time; cancellations take effect at the end of the current billing period. Free tier usage is subject to the limits described on our pricing page.
    </p>

    <SectionH>Your Content</SectionH>
    <p>
      You retain all rights to the application data, test cases, and other content you provide to QraftAI. You grant us a limited license to use that content solely to operate and improve the service for you.
    </p>

    <SectionH>Limitation of Liability</SectionH>
    <p>
      QraftAI is provided "as is". To the maximum extent permitted by law, SwiftScale Software is not liable for any indirect, incidental, or consequential damages arising from your use of the service.
    </p>

    <SectionH>Changes</SectionH>
    <p>
      We may update these Terms periodically. Material changes will be communicated by email or through the service. Continued use after changes means you accept the revised Terms.
    </p>

    <SectionH>Contact</SectionH>
    <p>
      Questions about these Terms? Email <a className="text-teal hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>
  </LegalLayout>
);

export const CookiePolicy = () => (
  <LegalLayout title="Cookie Policy">
    <p>
      This Cookie Policy explains how SwiftScale Software uses cookies and similar technologies on swiftscalesoftware.com.
    </p>

    <SectionH>What Are Cookies</SectionH>
    <p>
      Cookies are small text files stored on your device that help websites remember information about your visit. They make websites work, improve performance, and provide analytics.
    </p>

    <SectionH>Cookies We Use</SectionH>
    <p>
      We use a small number of cookies, including: essential cookies that keep the site functional, and analytics cookies (Google Analytics) that help us understand how visitors use our site. We do not use cookies for advertising.
    </p>

    <SectionH>Managing Cookies</SectionH>
    <p>
      You can disable cookies in your browser settings. Disabling essential cookies may affect site functionality. You can opt out of Google Analytics via the Google Analytics Opt-out Browser Add-on.
    </p>

    <SectionH>Contact</SectionH>
    <p>
      Questions about cookies? Email <a className="text-teal hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>
  </LegalLayout>
);

export const NotFound = () => (
  <div className="App">
    <div className="relative bg-navy">
      <Navbar />
    </div>
    <section className="section-padding bg-navy pt-32 min-h-[70vh] flex items-center">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-poppins mb-6 bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Page not found</h2>
          <p className="text-white/70 mb-8">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn-primary inline-block">Back to Home</Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
