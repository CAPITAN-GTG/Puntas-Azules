"use client"
import React from "react";
import { cormorantGaramond } from "../../fonts";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white text-black py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest">CONTACT US</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${cormorantGaramond.className}`}>Get in Touch</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have a question or want to learn more about our tequilas? Reach out to us directly.
          </p>
        </div>

        <div className="bg-black/5 backdrop-blur-sm rounded-lg border border-black/10 p-8">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <a 
              href="mailto:info@senicinternational.com" 
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-white/60 transition-all duration-300"
            >
              <Mail className="h-8 w-8 text-[#5197A6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold mb-2 ${cormorantGaramond.className}`}>Email Us</h3>
              <span className="text-gray-700 text-sm group-hover:text-[#5197A6] transition-colors">info@senicinternational.com</span>
            </a>
            
            <a 
              href="tel:+19093215600" 
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-white/60 transition-all duration-300"
            >
              <Phone className="h-8 w-8 text-[#5197A6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold mb-2 ${cormorantGaramond.className}`}>Call Us</h3>
              <span className="text-gray-700 text-sm group-hover:text-[#5197A6] transition-colors">+1 (909) 321-5600</span>
            </a>
            
            <a 
              href="https://maps.google.com/?q=1670+Hammer+Ave+Ste+3+norco+CA+92860" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-lg hover:bg-white/60 transition-all duration-300"
            >
              <MapPin className="h-8 w-8 text-[#5197A6] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold mb-2 ${cormorantGaramond.className}`}>Visit Us</h3>
              <span className="text-gray-700 text-sm group-hover:text-[#5197A6] transition-colors">1670 Hammer Ave Ste 3<br/>Norco, CA 92860</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;