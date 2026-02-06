'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Users, Zap, Shield, Layout, 
  Search, CheckCircle2, ArrowRight, Star, Plus, 
  Minus, Globe, Sparkles, Lock, Laptop, Layers, 
  Fingerprint, Smile
} from 'lucide-react';

export default function EmeraldChatLanding() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-emerald-500/30 font-sans">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <MessageSquare className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              NEXUS
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Interface</a>
            <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-600/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-wide mb-10"
          >
            <Sparkles className="w-3 h-3" /> Redefining Web Communication
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter"
          >
            THE BROWSER IS <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">YOUR NEW HOME.</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
            Nexus brings the intimacy of personal chat and the power of massive groups 
            to a lightning-fast web experience. Better than green. Faster than ever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-emerald-600 text-white h-16 px-10 rounded-2xl font-bold flex items-center gap-3 hover:bg-emerald-500 transition-all group">
              Open Web App <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-slate-900 border border-slate-800 h-16 px-10 rounded-2xl font-bold hover:bg-slate-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* --- FANCY SECTION 1: THE WEB INTERFACE (User Request) --- */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2.5rem] blur opacity-20" />
          <div className="relative bg-slate-950 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Browser Mockup Header */}
            <div className="h-12 bg-slate-900/50 border-b border-white/5 flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800" />
              </div>
              <div className="mx-auto bg-slate-900 px-10 py-1 rounded text-[10px] text-slate-500 font-mono">
                nexus.app/web/chat/personal
              </div>
            </div>
            {/* App Layout Mockup */}
            <div className="flex h-[500px]">
              <div className="w-72 border-r border-white/5 bg-slate-900/20 p-4 space-y-4 hidden md:block">
                <div className="h-8 w-full bg-slate-800/50 rounded-lg" />
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-800" />
                    <div className="space-y-2 flex-1">
                      <div className="h-2 w-3/4 bg-slate-800 rounded" />
                      <div className="h-2 w-1/2 bg-slate-800/50 rounded" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col justify-center items-center p-12 text-center">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-6">
                  <Laptop className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 italic">Desktop Mastery.</h3>
                <p className="text-slate-500 max-w-sm">No phone connection required. A standalone web experience with multi-window support and persistent sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FANCY SECTION 2: THE "STORIES" REEL --- */}
      <section className="py-32 bg-slate-950/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Stay in the loop.</h2>
              <p className="text-slate-500">Ephemeral status updates from your inner circle.</p>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="min-w-[160px] h-[240px] bg-slate-900 rounded-3xl border border-white/5 relative overflow-hidden group cursor-pointer"
              >
                <img src={`https://picsum.photos/seed/${i+100}/400/600`} className="absolute inset-0 object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full border-2 border-emerald-500 p-0.5">
                   <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute bottom-4 left-4 font-bold text-xs">@user_name</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES (Personal, Groups, Profiles) */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MessageSquare />} 
            title="Personal Chat" 
            desc="One-on-one encrypted messaging with rich media support and read receipts." 
          />
          <FeatureCard 
            icon={<Users />} 
            title="Dynamic Groups" 
            desc="Create communities for 2 or 2,000. Advanced roles, threads, and polls." 
          />
          <FeatureCard 
            icon={<Layers />} 
            title="Custom Profiles" 
            desc="Express yourself with custom themes, animated avatars, and status badges." 
          />
        </div>
      </section>

      {/* --- FANCY SECTION 3: THE SECURITY VAULT --- */}
      <section id="security" className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-500/10 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Fingerprint className="text-emerald-500 w-8 h-8" />
              </div>
              <h2 className="text-5xl font-black mb-8">Your Privacy <br /><span className="text-emerald-500">is Permanent.</span></h2>
              <div className="space-y-8">
                <SecurityRow title="End-to-End Encryption" desc="Powered by the Signal Protocol. We can't see your chats. No one can." />
                <SecurityRow title="Biometric Web Lock" desc="Lock your web session with TouchID or FaceID directly from the browser." />
                <SecurityRow title="Cloud-Sync Sandbox" desc="Your data is siloed. We never sell, track, or share your interaction data." />
              </div>
            </div>
            <div className="flex justify-center">
               <div className="relative w-72 h-72">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-full" 
                  />
                  <div className="absolute inset-4 border border-emerald-500/10 rounded-full flex items-center justify-center bg-slate-950/50 backdrop-blur-3xl shadow-2xl">
                     <Lock className="w-20 h-20 text-emerald-500 animate-pulse" />
                  </div>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/5 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* 4. USER COMMENTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">What the world says.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CommentCard name="Alex Sterling" handle="@alex_dev" text="Finally a web chat app that doesn't eat my RAM. The Emerald theme is such a breath of fresh air compared to WhatsApp's old green." />
            <CommentCard name="Lena Rose" handle="@lena_design" text="The profile customization is insane. I've spent hours just tweaking my status badges. Love the UX!" />
            <CommentCard name="Mark T." handle="@mark_cloud" text="The security vault feature gives me actual peace of mind. E2E encryption on a web app done right." />
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-32 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Questions & Answers</h2>
        <div className="space-y-4">
          <FaqItem q="Is it compatible with my phone?" a="Nexus is a standalone web app, but it syncs perfectly with our iOS and Android companions." />
          <FaqItem q="How many people can join a group?" a="Our basic groups support up to 1,000 members. Professional communities can go up to 50,000." />
          <FaqItem q="Can I delete my data?" a="Yes. We have a 'Nuclear Option' in settings that wipes every trace of your account from our servers." />
        </div>
      </section>

      {/* 6. ACTION CARD */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-emerald-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-slate-950 leading-[0.9] tracking-tighter">THE FUTURE OF <br /> CHAT IS OPEN.</h2>
            <button className="bg-slate-950 text-white h-20 px-12 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
              GET STARTED FOR FREE
            </button>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full group-hover:scale-110 transition-transform" />
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg" />
            <span>NEXUS</span>
          </div>
          <div className="flex gap-10 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
          </div>
          <p className="text-slate-600 text-xs">© 2026 Nexus Protocol. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// UI HELPER COMPONENTS
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all group">
      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function SecurityRow({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-6">
      <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
      <div>
        <h4 className="font-bold text-lg mb-1">{title}</h4>
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function CommentCard({ name, handle, text }: { name: string, handle: string, text: string }) {
  return (
    <div className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 space-y-4">
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-emerald-500 text-emerald-500" />)}
      </div>
      <p className="text-slate-400 italic">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-800" />
        <div>
          <p className="font-bold text-sm text-white">{name}</p>
          <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">{handle}</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-900/30 rounded-2xl border border-white/5">
      <button onClick={() => setOpen(!open)} className="w-full p-6 flex justify-between items-center text-left">
        <span className="font-bold">{q}</span>
        {open ? <Minus className="w-4 h-4 text-emerald-500" /> : <Plus className="w-4 h-4" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}