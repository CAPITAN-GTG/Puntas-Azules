"use client"
import React, { useState } from "react";
import { cormorantGaramond } from "../../fonts";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-[#5197A6] mr-4" />
            <span className="text-[#5197A6] font-light tracking-widest">CONTACT US</span>
            <div className="h-px w-12 bg-[#5197A6] ml-4" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${cormorantGaramond.className}`}>Get in Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question, comment, or just want to say hello? Fill out the form below or reach us directly.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8">
          {submitted ? (
            <div className="text-center py-12">
              <h2 className={`text-2xl font-bold mb-2 text-[#5197A6] ${cormorantGaramond.className}`}>Thank you!</h2>
              <p className="text-gray-300">Your message has been sent. We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 focus:border-[#5197A6] text-white placeholder-gray-500 outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 focus:border-[#5197A6] text-white placeholder-gray-500 outline-none transition-colors"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/10 focus:border-[#5197A6] text-white placeholder-gray-500 outline-none transition-colors resize-none"
                  placeholder="Type your message..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5197A6] text-black font-bold py-3 rounded-md hover:bg-[#5197A6]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5197A6] focus:ring-offset-2 focus:ring-offset-black"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

          <div className="mt-10 border-t border-white/10 pt-8 grid gap-6 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 text-[#5197A6] mb-2" />
              <span className="text-gray-300 text-sm">info@senicinternational.com</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 text-[#5197A6] mb-2" />
              <span className="text-gray-300 text-sm">+1 (909) 321-5600</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 text-[#5197A6] mb-2" />
              <span className="text-gray-300 text-sm">1670 Hammer Ave Ste 3 norco CA 92860</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;