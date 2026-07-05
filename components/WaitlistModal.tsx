"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2 } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setEmail("");
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    // Simulate network request for premium feel
    setTimeout(() => {
      setStatus("success");
      // In a real app, send this to Supabase or an email marketing service here
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-[#0f0f0f] border border-white/10 w-full max-w-md rounded-[2rem] p-8 relative overflow-hidden pointer-events-auto shadow-[0_0_50px_rgba(212,175,55,0.15)]"
            >
              {/* Premium Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-ardent/20 rounded-full blur-[60px] pointer-events-none" />
              
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              {status === "success" ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20"
                  >
                    <CheckCircle2 size={40} className="text-green-400" />
                  </motion.div>
                  <h3 className="font-serif text-3xl font-bold text-white mb-3">You're on the list.</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Thank you for joining. We'll notify you the moment Cymbie opens up for new exclusive members.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-8 w-full py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-warm to-ardent flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    <Mail className="text-black" size={20} />
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-white mb-3">Request Access</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Cymbie is currently invite-only. Join the waitlist to secure your spot for the next wave of admissions.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="email" 
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-ardent/50 transition-colors"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status === "loading"}
                      className="relative w-full overflow-hidden rounded-xl group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C49A2E] transition-transform duration-500 group-hover:scale-105" />
                      <div className="relative px-5 py-4 flex items-center justify-center">
                        <span className="text-black font-bold text-base">
                          {status === "loading" ? "Securing Spot..." : "Join Waitlist"}
                        </span>
                      </div>
                    </button>
                  </form>
                  <p className="text-center text-xs text-gray-600 mt-6">
                    By joining, you agree to our Terms of Service & Privacy Policy.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
