import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-apple-footer-bg text-apple-footer-text text-xs">
      <div className="apple-container py-12">
        {/* Footnotes */}
        <div className="border-b border-apple-footer-border pb-5">
          <ol className="list-decimal pl-4 space-y-2">
            <li className="ml-2">
              Trade-in values vary based on the condition, year, and configuration of your eligible trade-in device.
              Not all devices are eligible for credit. You must be at least 18 years old to trade in for credit or
              for a Fruit Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added
              to a Fruit Gift Card.
            </li>
            <li className="ml-2">
              Fruit Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, with
              Siri and device language set to English.
            </li>
            <li className="ml-2">
              Battery life claims depend on network configuration and many other factors; actual results will vary.
              Battery has limited recharge cycles and may eventually need to be replaced.
            </li>
          </ol>
        </div>

        {/* Directory */}
        <div className="py-5 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <h3 className="font-semibold text-xs text-black mb-2">Shop and Learn</h3>
            <ul className="space-y-2">
              <li><Link href="/store" className="hover:underline">Store</Link></li>
              <li><Link href="/mac" className="hover:underline">Mac</Link></li>
              <li><Link href="/ipad" className="hover:underline">iPad</Link></li>
              <li><Link href="/iphone" className="hover:underline">iPhone</Link></li>
              <li><Link href="/watch" className="hover:underline">Watch</Link></li>
              <li><Link href="/vision" className="hover:underline">Vision</Link></li>
              <li><Link href="/airpods" className="hover:underline">AirPods</Link></li>
              <li><Link href="/tv-home" className="hover:underline">TV & Home</Link></li>
              <li><Link href="/airtag" className="hover:underline">AirTag</Link></li>
              <li><Link href="/accessories" className="hover:underline">Accessories</Link></li>
              <li><Link href="/gift-cards" className="hover:underline">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-black mb-2">Fruit Wallet</h3>
            <ul className="space-y-2">
              <li><Link href="/wallet" className="hover:underline">Wallet</Link></li>
              <li><Link href="/fruit-card" className="hover:underline">Fruit Card</Link></li>
              <li><Link href="/fruit-pay" className="hover:underline">Fruit Pay</Link></li>
              <li><Link href="/fruit-cash" className="hover:underline">Fruit Cash</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-black mb-2">Entertainment</h3>
            <ul className="space-y-2">
              <li><Link href="/fruit-one" className="hover:underline">Fruit One</Link></li>
              <li><Link href="/fruit-tv-plus" className="hover:underline">Fruit TV+</Link></li>
              <li><Link href="/fruit-music" className="hover:underline">Fruit Music</Link></li>
              <li><Link href="/fruit-arcade" className="hover:underline">Fruit Arcade</Link></li>
              <li><Link href="/fruit-fitness-plus" className="hover:underline">Fruit Fitness+</Link></li>
              <li><Link href="/fruit-news" className="hover:underline">Fruit News+</Link></li>
              <li><Link href="/fruit-podcasts" className="hover:underline">Fruit Podcasts</Link></li>
              <li><Link href="/fruit-books" className="hover:underline">Fruit Books</Link></li>
              <li><Link href="/app-store" className="hover:underline">App Store</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-black mb-2">Fruit Store</h3>
            <ul className="space-y-2">
              <li><Link href="/retail" className="hover:underline">Find a Store</Link></li>
              <li><Link href="/retail/geniusbar" className="hover:underline">Genius Bar</Link></li>
              <li><Link href="/today" className="hover:underline">Today at Fruit</Link></li>
              <li><Link href="/today/camp" className="hover:underline">Fruit Camp</Link></li>
              <li><Link href="/trade-in" className="hover:underline">Fruit Trade In</Link></li>
              <li><Link href="/financing" className="hover:underline">Financing</Link></li>
              <li><Link href="/order-status" className="hover:underline">Order Status</Link></li>
              <li><Link href="/shopping-help" className="hover:underline">Shopping Help</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xs text-black mb-2">Fruit Values</h3>
            <ul className="space-y-2">
              <li><Link href="/accessibility" className="hover:underline">Accessibility</Link></li>
              <li><Link href="/environment" className="hover:underline">Environment</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
              <li><Link href="/supplier-responsibility" className="hover:underline">Supplier Responsibility</Link></li>
            </ul>

            <h3 className="font-semibold text-xs text-black mt-6 mb-2">About Fruit</h3>
            <ul className="space-y-2">
              <li><Link href="/newsroom" className="hover:underline">Newsroom</Link></li>
              <li><Link href="/leadership" className="hover:underline">Fruit Leadership</Link></li>
              <li><Link href="/careers" className="hover:underline">Career Opportunities</Link></li>
              <li><Link href="/compliance" className="hover:underline">Ethics & Compliance</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Fruit</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-apple-footer-border pt-5">
          <p className="mb-2">
            More ways to shop: <Link href="/retail" className="text-apple-link-blue hover:underline">Find a Fruit Store</Link> or <Link href="/other-retailers" className="text-apple-link-blue hover:underline">other retailer</Link> near you. Or call 1-800-MY-FRUIT.
          </p>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="mb-2 md:mb-0">Copyright © 2025 Fruit Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-6">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/legal/terms-of-use" className="hover:underline">Terms of Use</Link>
              <Link href="/sales-refunds" className="hover:underline">Sales and Refunds</Link>
              <Link href="/legal" className="hover:underline">Legal</Link>
              <Link href="/sitemap" className="hover:underline">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
