"use client";
import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Edit3,
  TrendingUp,
  Code,
  Monitor,
  Search,
  MessageSquare,
  ShoppingCart,
  Database,
  Cloud,
  ArrowRight,
  Check,
  Star,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("web");

  const mainServices = [
    {
      id: "web",
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      subtitle: "Static & Dynamic Websites",
      description:
        "Modern, responsive, and secure websites that drive business growth",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Secure & Reliable",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      startingPrice: "₹15,000",
    },
    {
      id: "mobile",
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      subtitle: "iOS & Android Applications",
      description:
        "Advanced mobile applications that engage users and boost your business",
      features: [
        "Cross-Platform",
        "Native Performance",
        "App Store Ready",
        "Real-time Updates",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      startingPrice: "₹25,000",
    },
    {
      id: "design",
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      subtitle: "User Experience & Interface",
      description:
        "User-focused, engaging, and visually appealing designs that convert",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      startingPrice: "₹8,000",
    },
    {
      id: "marketing",
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      subtitle: "SEO & Social Media",
      description:
        "Comprehensive digital marketing strategies to boost your online presence",
      features: [
        "SEO Optimization",
        "Social Media",
        "Content Strategy",
        "Analytics",
      ],
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEMrush"],
      startingPrice: "₹5,000",
    },
  ];

  const additionalServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions for your specific business needs",
      price: "Starting from ₹20,000",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Secure and efficient database design and management",
      price: "Starting from ₹10,000",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Cloud migration, hosting, and management services",
      price: "Starting from ₹12,000",
    },
    {
      icon: <Edit3 className="w-8 h-8" />,
      title: "Content Management",
      description:
        "Professional content creation and optimization services",
      price: "Starting from ₹3,000",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Consulting",
      description: "Expert SEO audit and strategy development",
      price: "Starting from ₹5,000",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description:
        "Complete online store development and management",
      price: "Starting from ₹18,000",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We understand your requirements and create a detailed project roadmap",
    },
    {
      step: "02",
      title: "Design & Development",
      description:
        "Our team creates stunning designs and develops robust solutions",
    },
    {
      step: "03",
      title: "Testing & Optimization",
      description:
        "Rigorous testing ensures quality and optimal performance",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Successful deployment with ongoing support and maintenance",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "TechStart Solutions",
      rating: 5,
      text: "LabXCode transformed our digital presence completely. Their web development skills are outstanding!",
    },
    {
      name: "Priya Sharma",
      company: "Fashion Hub",
      rating: 5,
      text: "The mobile app they developed for us increased our sales by 300%. Highly recommended!",
    },
    {
      name: "Amit Patel",
      company: "Local Business",
      rating: 5,
      text: "Professional, timely, and excellent results. LabXCode is our go-to tech partner.",
    },
  ];

  return (
    // 🧩 Added top padding to fix header overlap issue
    <div className="min-h-screen bg-white text-sm sm:text-base pt-16 sm:pt-20">

      {/* Hero Section */}
      <section className="relative  min-h-[22vh] flex items-center justify-center text-center px-4 sm:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-green-800 mb-4">
            Our <span className="text-blue-800">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-800">
            Comprehensive digital solutions to transform your business and drive
            growth in the digital age.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center mb-8 ">
          <h2 className="text-5xl font-bold text-blue-800 mb-2">
            Core Services
          </h2>
          <p className="text-lg text-gray-800">
            Choose the service that fits your needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {mainServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === service.id
                  ? "bg-gradient-to-r from-blue-500 to-green-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:text-blue-600"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service */}
        {mainServices.map(
          (service) =>
            activeTab === service.id && (
              <div
                key={service.id}
                className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-10 p-8 sm:p-12">
                  <div>
                    <div className="text-green-700 mb-4">{service.icon}</div>
                    <h3 className="text-3xl font-bold text-blue-700 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-green-800 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-800 mb-6">{service.description}</p>

                    <h4 className="font-semibold text-lg mb-3 text-black">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-800">
                          <Check className="text-green-500 w-5 h-5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <button className="bg-gradient-to-r from-blue-500 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all flex items-center gap-2">
                      Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-blue-800 mb-3">
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white text-green-700 border border-green-200 font-medium px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Additional Services
          </h2>
          <p className="text-gray-700 mb-10">
            Extended solutions for comprehensive digital transformation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <div className="text-blue-500 mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
