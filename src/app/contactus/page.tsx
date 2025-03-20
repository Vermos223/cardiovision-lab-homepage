'use client'
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success?: boolean, message?: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitResult({
          success: true,
          message: data.message || 'Your message has been sent successfully!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'Failed to send your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-8 ">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Core Values */}
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-center mb-8 text-gray-700">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Innovation */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
                  <h3 className="text-3xl font-semibold mb-3 text-gray-700">Innovation</h3>
                  <p className="text-gray-600">
                    Develop an innovative mindset and a spirit of exploration, which helps maintain lasting passion in work, life, and personal growth.
                  </p>
                </div>

                {/* Responsibility */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
                  <h3 className="text-3xl font-semibold mb-3 text-gray-700">Responsibility</h3>
                  <p className="text-gray-600">
                    Appreciate the valuable opportunity for learning and research training. Achievements can only be made through diligent and responsible work.
                  </p>
                </div>

                {/* Determination */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
                  <h3 className="text-3xl font-semibold mb-3 text-gray-700">Determination</h3>
                  <p className="text-gray-600">
                    Maintain perseverance and enthusiasm for long-term goals to steadfastly face challenges and win in the marathon of life.
                  </p>
                </div>

                {/* Optimism */}
                <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
                  <h3 className="text-3xl font-semibold mb-3 text-gray-700">Optimism</h3>
                  <p className="text-gray-600">
                    An optimistic and open-minded attitude enables one to face life's challenges with a smile and maintain forward momentum.
                  </p>
                </div>
              </div>
            </div>
            
            <div id='contact-form' className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-700">Research Group</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                      <div className="mt-1 mr-4 text-gray-600">
                        <FaEnvelope size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-700">Email</h3>
                        <p className="text-gray-600">
                          qihk@shanghaitech.edu.cn<br />
                        </p>
                      </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 text-gray-600">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-gray-700">Address</h3>
                      <p className="text-gray-600">
                        Pudong New District, Shanghai <br />
                        ShanghaiTech University<br />
                        School of Biomedical Engineering<br />
                        Building SIST-4, Room 408<br />
                      </p>
                    </div>
                  </div>
                  
                  {/* <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-3xl mb-3 text-gray-700">Opportunities</h3>
                    <p className="text-gray-600 mb-4">
                      Welcome students with backgrounds in Biomedical Engineering, Electrical Engineering, Mathematics, Computer Science, and Medicine.
                    </p>
    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <span className="text-gray-600">1. Master's Programs</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-gray-600">2. Doctoral Programs</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-600">3. Postdoctoral Positions</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
              {/* <div className="pt-4 border-t border-gray-200"> */}
                    <h3 className="font-medium text-3xl mb-3 text-gray-700">Opportunities</h3>
                    <p className="text-gray-600 mb-4">
                      Welcome students with backgrounds in Biomedical Engineering, Electrical Engineering, Mathematics, Computer Science, and Medicine.
                    </p>
    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Master's Programs</span>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Doctoral Programs</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Postdoctoral Positions</span>
                      </div>
                    </div>
                  {/* </div> */}

              </div>
              
              {/* Contact Table */}
              {/* <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-300 hover:shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-700">Send Message</h2>
                
                {submitResult && (
                  <div className={`p-4 rounded-md mb-6 ${submitResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitResult.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-md font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div> */}
            </div>
            
            {/* Map */}
            <div className="mt-16 bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Getting Here</h2>
              <div className="h-96 w-full rounded-md overflow-hidden">
                <iframe 
                  src="https://m.amap.com/navi/?dest=121.5952,31.1777&destName=School of Biomedical Engineering&hideRouteIcon=1&key=85a5452a428c728647ebdeec7a42c5a4&language=en&zoom=20"
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}