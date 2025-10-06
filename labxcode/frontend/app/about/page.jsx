import React from 'react';
import { Users, Clock, Zap, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Centric Approach",
      description: "Every project is designed around your needs"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "We value your time as much as you do"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Latest Technologies",
      description: "Modern frameworks and tools for future-ready solutions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Long-Term Partnership",
      description: "Not just a one-time service, but a journey of growth together"
    }
  ];

  return (
    <div className="min-h-screen bg-white/5 text-gray-800 sm:text-base text-sm">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-green-700 mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-green-700 bg-clip-text text-transparent">LabXCode</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-900 max-w-3xl mx-auto leading-relaxed px-2">
              Empowering businesses with powerful and innovative digital solutions since October 20, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-green-700">Our</span>
              <span className="text-blue-600"> Story</span>
            </h2>
            <div className="prose prose-sm sm:prose-lg text-gray-900 space-y-4 sm:space-y-6">
              <p>
                LabXCode is a fast-growing IT company, founded with a clear vision – to empower businesses with powerful and innovative digital solutions. What began as a small dream has now transformed into a mission to help organizations build a strong digital presence and achieve long-term success.
              </p>
              <p>
                In today's competitive digital era, every business needs more than just an online presence—it needs an impactful identity. At LabXCode, we don't just create IT solutions; we bring your ideas to life.
              </p>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-blue-700 mb-3 sm:mb-4">2025</div>
                <div className="text-lg sm:text-xl text-green-900 font-bold mb-5">Founded on Oct 20</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-800">100+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-800">50+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white/5 backdrop-blur-sm py-10 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 sm:mb-8">Our Mission</h2>
          <p className="text-base sm:text-xl text-gray-900 leading-relaxed">
            Our mission is to deliver world-class services to our clients, ensuring innovation, quality, and trust at every step. We aim not only to provide solutions but to build lasting partnerships that drive growth and success.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-r from-blue-900 to-green-700/80 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Why Choose LabXCode?</h2>
            <p className="text-base sm:text-xl text-gray-300">What makes us different</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-900">{feature.icon}</div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 sm:mb-8">Our Commitment</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-xl text-gray-900 leading-relaxed mb-6 sm:mb-8">
              At LabXCode, we believe every business is unique and deserves a tailored digital strategy. By choosing us, you're choosing a partner dedicated to innovation, reliability, and your long-term success.
            </p>
            <div className="bg-gradient-to-r from-blue-800/70 to-green-600 rounded-2xl p-6 sm:p-8 text-white">
              <p className="text-lg sm:text-2xl font-semibold">
                With LabXCode, you don't just get IT services—you get a trusted team that helps you grow, compete, and lead in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-800 to-black blur-2xl rounded-2xl opacity-20" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Let's build something amazing together
          </p>
          <button className="bg-white text-green-800 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:scale-105 transition-transform">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
