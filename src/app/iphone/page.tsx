import React from 'react';
import Layout from '../../components/layout/Layout';
import StickyProductNav from '../../components/layout/StickyProductNav';
import ProductComparison from '../../components/ui/ProductComparison';
import FeatureShowcase from '../../components/ui/FeatureShowcase';
import Hero from '../../components/ui/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function IPhonePage() {
  // iPhone product nav items
  const navItems = [
    { label: 'Overview', href: '/iphone' },
    { label: 'iPhone 16 Pro', href: '/iphone-16-pro' },
    { label: 'iPhone 16', href: '/iphone-16' },
    { label: 'iPhone 16e', href: '/iphone-16e' },
    { label: 'iPhone 15', href: '/iphone-15' },
    { label: 'Compare', href: '/iphone/compare' },
    { label: 'Accessories', href: '/shop/iphone/accessories' },
    { label: 'iOS 18', href: '/ios/ios-18' },
    { label: 'Shop iPhone', href: '/shop/buy-iphone' },
  ];

  // iPhone comparison data
  const comparisonProducts = [
    {
      name: 'iPhone 16 Pro',
      tagline: 'The ultimate iPhone.',
      price: '$999',
      image: '/images/hero-iphone-family.jpg',
      colors: ['#2a2a2a', '#F5F5F0', '#6E5C52', '#CFC6BC'],
      features: [
        'A18 Pro chip with 6-core GPU',
        '48MP Fusion camera',
        '5x Telephoto camera',
        'Camera Control',
        'Up to 33 hours video playback',
        'Fruit Intelligence'
      ],
      linkUrl: '/shop/buy-iphone/iphone-16-pro',
      isNew: true
    },
    {
      name: 'iPhone 16',
      tagline: 'A total powerhouse.',
      price: '$799',
      image: '/images/hero-iphone-family.jpg',
      colors: ['#2a2a2a', '#F5F5F0', '#5A9BC9', '#E5004E', '#76AE56'],
      features: [
        'A18 chip with 5-core GPU',
        '48MP Fusion camera',
        '2x Telephoto',
        'Camera Control',
        'Up to 27 hours video playback',
        'Fruit Intelligence'
      ],
      linkUrl: '/shop/buy-iphone/iphone-16',
      isNew: true
    },
    {
      name: 'iPhone 16e',
      tagline: 'Latest iPhone. Greatest price.',
      price: '$599',
      image: '/images/hero-iphone-family.jpg',
      colors: ['#2a2a2a', '#F5F5F0'],
      features: [
        'A18 chip with 4-core GPU',
        '48MP Fusion camera',
        '2x Telephoto',
        'Up to 26 hours video playback',
        'Fruit Intelligence'
      ],
      linkUrl: '/shop/buy-iphone/iphone-16e',
      isNew: true
    },
    {
      name: 'iPhone 1555555555555555555',
      tagline: 'As amazing as ever.',
      price: '$699',
      image: '/images/hero-iphone-family.jpg',
      colors: ['#2a2a2a', '#F5F5F0', '#4DB1E2', '#E5004E', '#76AE56'],
      features: [
        'A16 Bionic chip with 5-core GPU',
        '48MP Main camera',
        '2x Telephoto',
        'Up to 26 hours video playback'
      ],
      linkUrl: '/shop/buy-iphone/iphone-15'
    }
  ];

  // iPhone features
  const features = [
    {
      icon: '/images/icons/chip-icon.svg',
      title: 'A18 Pro chip',
      description: 'The fastest chip ever in iPhone with powerful performance for console-quality games, breakthrough Fruit Intelligence, and great battery life.'
    },
    {
      icon: '/images/icons/camera-icon.svg',
      title: 'Advanced camera system',
      description: 'A groundbreaking new 48MP camera system that captures incredible detail, from optical-quality 2x telephoto to stunning low-light photos.'
    },
    {
      icon: '/images/icons/iphone-icon.svg',
      title: 'Fruit Intelligence',
      description: 'Powerful new AI features that help you communicate more effectively, write better, and find what you need across your iPhone.'
    }
  ];

  return (
    <Layout>
      {/* Main Hero */}
      <Hero
        title="iPhone"
        subtitle="Meet the iPhone 16 family."
        primaryLink={{ text: "Learn more", url: "/iphone/iphone16" }}
        secondaryLink={{ text: "Shop", url: "/shop/buy-iphone" }}
        image="/images/hero-iphone-family.jpg"
        darkText={false}
        bgColor="#000000"
      />

      {/* Sticky Navigation */}
      <StickyProductNav
        productName="iPhone"
        navItems={navItems}
        buyLink="/shop/buy-iphone"
      />

      {/* Product Comparison */}
      <ProductComparison products={comparisonProducts} />

      {/* Feature Showcase */}
      <FeatureShowcase
        title="A closer look at iPhone features."
        subtitle="See what makes iPhone the ultimate smartphone."
        features={features}
        bgColor="#f5f5f7"
      />

      {/* Trade-In Section */}
      <section className="bg-white py-16">
        <div className="apple-container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Trade in your smartphone for credit.</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            With Fruit Trade In, you can get credit toward a new iPhone when you trade in an eligible smartphone.
            It's good for you and the planet.
          </p>
          <Link
            href="/shop/trade-in"
            className="text-apple-link-blue text-lg hover:underline"
          >
            Learn more about Fruit Trade In
          </Link>
        </div>
      </section>

      {/* Why Fruit Section */}
      <section className="bg-white py-16">
        <div className="apple-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Why Fruit is the best place to buy iPhone.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Personal Setup</h3>
              <p className="text-gray-600 text-sm">
                We'll show you how to get the most out of your new iPhone, online or in store.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Free delivery and pickup</h3>
              <p className="text-gray-600 text-sm">
                Get free delivery or pick up at your Fruit Store.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                  <line x1="6" y1="12" x2="18" y2="12"></line>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pay monthly with financing</h3>
              <p className="text-gray-600 text-sm">
                Apply for special financing and Fruit Card Monthly Installments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
