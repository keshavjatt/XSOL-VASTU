import Image from "next/image";
import {
  Calendar,
  Clock,
  Youtube,
  Users2,
  Star,
  CheckCircle,
  Flame,
  ShieldCheck,
  Smile,
  Sparkles,
  ThumbsUp
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#fdf5ef] text-[#222] font-sans">
      {/* Attention Banner */}
      <div className="bg-[#f05a23] text-white text-center py-3 font-semibold text-sm md:text-base">
        Attention: People Looking To Kickstart Their Career As A XSOL Vastu Consultant!
      </div>

      {/* Hero Section */}
      <section className="bg-[#fdf5ef] text-center py-8 px-4">
        <h2 className="bg-white text-black px-6 py-2 rounded-full text-xl md:text-2xl mb-2 font-medium inline-block">
          The Only To-The-Point Workshop You Need To
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mt-2">
          Become a Skilled <span className="text-[#f05a23]">XSOL Vastu Consultant</span><br /> And Make At Least {" "}
          <span className="text-[#f05a23] underline">6 Figure</span> Income Per Month
        </h1>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          By Working With <span className="text-[#f05a23]">“High-Paying Vastu Clients”</span>
        </h3>
        <h3 className="text-2xl md:text-3xl font-bold">Helping Them To Resolve Their Life Troubles Like A Pro!</h3>

        <p className="text-lg italic underline mt-4">
          Even If You're A BEGINNER And Have ZERO Prior Knowledge About Vastu...
        </p>

        {/* Video Embed */}
        <div className="mt-6 mx-auto max-w-3xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Vastu Workshop"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <Calendar className="text-[#f05a23]" />
            <span className="font-medium">27th, 28th & 29th April</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <Clock className="text-[#f05a23]" />
            <span className="font-medium">At 8:00 PM IST</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <Star className="text-[#f05a23]" />
            <span className="font-medium">10+ Years of Experience</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <Youtube className="text-[#f05a23]" />
            <span className="font-medium">1 Lakh+ Subscribers On YouTube</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button className="register-wiggle bg-gradient-to-r from-[#f05a23] via-[#f7803c] to-[#fc6c8f] bg-[length:200%_200%] animate-gradient-move text-white font-bold py-4 px-8 rounded-lg text-xl shadow-md hover:shadow-xl transition-all">
            REGISTER NOW FOR JUST ₹97
          </button>
          <p className="text-[#007e60] font-medium mt-2">
            ACTUAL PRICE <span className="line-through">₹5999</span>
          </p>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="bg-[#1c1c2c] text-white text-center py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">But Why Learn Vastu With Us?</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#2a2a3d] p-6 rounded-lg shadow-lg flex items-center gap-4">
            <CheckCircle className="text-[#f05a23]" />
            <p className="text-left">Simple, clear and powerful vastu techniques without confusion</p>
          </div>
          <div className="bg-[#2a2a3d] p-6 rounded-lg shadow-lg flex items-center gap-4">
            <ShieldCheck className="text-[#f05a23]" />
            <p className="text-left">Trusted by 1000+ clients with real results</p>
          </div>
          <div className="bg-[#2a2a3d] p-6 rounded-lg shadow-lg flex items-center gap-4">
            <Smile className="text-[#f05a23]" />
            <p className="text-left">Easy to understand for beginners, no prior experience needed</p>
          </div>
          <div className="bg-[#2a2a3d] p-6 rounded-lg shadow-lg flex items-center gap-4">
            <Sparkles className="text-[#f05a23]" />
            <p className="text-left">Get high-paying clients & build a fulfilling career</p>
          </div>
        </div>

        {/* CTA Repeat */}
        <div className="mt-10">
          <button className="register-wiggle bg-gradient-to-r from-[#f05a23] via-[#f7803c] to-[#fc6c8f] bg-[length:200%_200%] animate-gradient-move text-white font-bold py-4 px-8 rounded-lg text-xl shadow-md hover:shadow-xl transition-all">
            REGISTER NOW FOR JUST ₹97
          </button>
          <p className="text-[#007e60] font-medium mt-2">
            ACTUAL PRICE <span className="line-through">₹5999</span>
          </p>
        </div>
      </section>

      {/* Testimonials and Rest Sections */}
      <section className="bg-[#fdf5ef] text-center py-12 px-4">
        <h2 className="text-3xl font-bold mb-4">Testimonials From Real Students</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-4">
            <p>“XSOL Vastu Consultant ki class ne meri zindagi badal di.”</p>
            <p className="mt-2 font-semibold">– Ajit Giri</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p>“Sahi mentorship ke saath, mujhe ache clients milne lage.”</p>
            <p className="mt-2 font-semibold">– Vivek Kumar</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <p>“Pehle doubt tha, par ab main khud XSOL Vastu Consultant hoon.”</p>
            <p className="mt-2 font-semibold">– Kavita Sharma</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-10">
          <button className="register-wiggle bg-gradient-to-r from-[#f05a23] via-[#f7803c] to-[#fc6c8f] bg-[length:200%_200%] animate-gradient-move text-white font-bold py-4 px-8 rounded-lg text-xl shadow-md hover:shadow-xl transition-all">
            REGISTER NOW FOR JUST ₹97
          </button>
          <p className="text-[#007e60] font-medium mt-2">
            ACTUAL PRICE <span className="line-through">₹5999</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1c2c] text-white py-6 text-center text-sm">
        © 2025 XSOL Vastu Consultant | All Rights Reserved by XSOL DATA SYSTEM PVT LTD
      </footer>
    </div>
  );
}