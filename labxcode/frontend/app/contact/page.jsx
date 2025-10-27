'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const resp = await fetch('http://localhost:8000/api/saveContact', {
        method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await resp.json();

      if (result.status === 'success') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-xs sm:text-base pt-16 sm:pt-20">
      <div className="relative">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-10">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 animate-fade-in">
                Contact <span className="bg-gradient-to-r from-green-700 to-blue-400 bg-clip-text text-transparent">LabXCode</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Let's start a conversation about your next project.
              </p>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Why Choose LabXCode */}
              <div className="rounded-2xl p-6 sm:p-8 shadow-2xl text-gray-800">
                <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border shadow-2xl hover:shadow-blue-800 border-white/20">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800">Why Choose LabXCode?</h3>
                  <ul className="space-y-3 text-sm sm:text-base">
                    <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Expert development team</span></li>
                    <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Modern tech stack</span></li>
                    <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>24/7 support</span></li>
                    <li className="flex items-center space-x-3"><div className="w-2 h-2 bg-black rounded-full"></div><span>Agile methodology</span></li>
                  </ul>
                </div>
              </div>

              {/* Our Journey */}
              <div className="relative">
                <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border shadow-2xl hover:shadow-blue-800 border-white/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">Our Journey</h2>
                  <p className="text-sm sm:text-lg text-gray-900 leading-relaxed mb-4 sm:mb-6">
                    Since our inception, we have been committed to excellence, innovation, and customer satisfaction.
                    Our journey has been marked by significant milestones and achievements that have shaped us into
                    the leading software development company we are today.
                  </p>
                  <p className="text-gray-800 text-sm sm:text-base">
                    From humble beginnings to becoming a trusted partner for businesses worldwide,
                    our story is one of passion, dedication, and a relentless pursuit of quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6">
                  <p className="text-green-900 text-sm sm:text-base">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
                  <p className="text-red-900 text-sm sm:text-base">Something went wrong. Please try again.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-black font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-black font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg text-black font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-violet-800 disabled:bg-gray-600 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
