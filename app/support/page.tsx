"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an email or save to a database.
  };

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-ardent selection:text-black">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">We're here to help.</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Need assistance with your account, billing, or have a general question? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Cards */}
          <div className="bg-surface border border-border p-8 rounded-3xl text-center hover:border-ardent/50 transition-colors">
            <Mail className="text-ardent mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm mb-4">Expect a reply within 24 hours.</p>
            <a href="mailto:support@cymbie.com" className="text-ardent font-bold hover:underline">support@cymbie.com</a>
          </div>
          
          <div className="bg-surface border border-border p-8 rounded-3xl text-center hover:border-ardent/50 transition-colors">
            <MessageCircle className="text-ardent mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">Social</h3>
            <p className="text-gray-400 text-sm mb-4">Reach out to us on Twitter/X.</p>
            <a href="#" className="text-ardent font-bold hover:underline">@CymbieApp</a>
          </div>

          <div className="bg-surface border border-border p-8 rounded-3xl text-center hover:border-ardent/50 transition-colors">
            <HelpCircle className="text-ardent mx-auto mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-2">FAQ</h3>
            <p className="text-gray-400 text-sm mb-4">Browse our help center.</p>
            <a href="#" className="text-ardent font-bold hover:underline">View Articles</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-serif font-bold text-white mb-6 text-center">Send us a message</h2>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-ardent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-ardent" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">We've received your request and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input required type="text" id="name" className="w-full bg-[#0A0A0A] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ardent transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input required type="email" id="email" className="w-full bg-[#0A0A0A] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ardent transition-colors" placeholder="you@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select id="subject" className="w-full bg-[#0A0A0A] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ardent transition-colors appearance-none">
                  <option>Account Assistance</option>
                  <option>Billing & Subscriptions</option>
                  <option>Report a Bug</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea required id="message" rows={5} className="w-full bg-[#0A0A0A] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-ardent transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-ardent to-warm text-black font-bold text-lg hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}


