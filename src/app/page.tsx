import Link from 'next/link';
import MultiImageCarousel from '@/components/MultiImageCarousel';
import Header from '@/components/Header';

export default function Home() {
  const carouselImages = [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />

      {/* Carousel Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MultiImageCarousel images={carouselImages} autoPlayInterval={5000} imagesPerSlide={3} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Handcrafted Jewelry & Beading Supplies
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover unique handmade jewelry and premium beading supplies. 
            From elegant necklaces to DIY craft kits, create something beautiful.
          </p>
          <div className="flex justify-center">
            <Link href="/products" className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              View Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/products?category=necklaces" 
              className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer block"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Handmade Jewelry</h4>
              <p className="text-gray-600 mb-4">Unique, one-of-a-kind pieces crafted with care and attention to detail.</p>
              <p className="text-purple-600 font-semibold">Starting at $25</p>
            </Link>
            <Link 
              href="/products?category=beads" 
              className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer block"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Premium Beads</h4>
              <p className="text-gray-600 mb-4">High-quality beads in various materials, colors, and sizes for your projects.</p>
              <p className="text-purple-600 font-semibold">From $5</p>
            </Link>
            <Link 
              href="/products?category=kits" 
              className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer block"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">DIY Kits</h4>
              <p className="text-gray-600 mb-4">Complete kits with everything you need to create beautiful jewelry at home.</p>
              <p className="text-purple-600 font-semibold">$15 - $45</p>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">About Posh Beadery</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            With over 10 years of experience in jewelry making, we're passionate about helping you create 
            beautiful, unique pieces. Whether you're a beginner or an experienced crafter, we have the 
            supplies and expertise to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Questions about our products or need custom work? We'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:contact@poshbeadery.com" className="text-purple-600 hover:text-purple-700">
                        contact@poshbeadery.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:5551234273" className="text-purple-600 hover:text-purple-700">
                        (555) 123-BEAD
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">123 Craft Lane<br />Artisan District, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🕒</span>
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm<br />Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.etsy.com/shop/poshbeadery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                    aria-label="Visit our Etsy shop"
                  >
                    Etsy
                  </a>
                  <a 
                    href="https://www.instagram.com/poshbeadery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@poshbeadery" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                    aria-label="Follow us on TikTok"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h4>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-900 bg-white"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none text-gray-900 bg-white"
                    placeholder="Tell us what you're looking for or any questions you have..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
