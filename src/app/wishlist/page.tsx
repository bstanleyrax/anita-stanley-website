'use client';

import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState } from 'react';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [showShareModal, setShowShareModal] = useState(false);

  // Product data (in a real app, this would come from an API or database)
  const allProducts = [
    { id: 1, sku: "JWL-001", name: "Amethyst Crystal Necklace", price: 45.99, material: 'Amethyst', stock: 3, rating: 4.8, reviews: 24, size: '18 inches', image: "/products/amethyst-necklace.png", description: "Elegant handcrafted necklace featuring genuine amethyst crystals" },
    { id: 2, sku: "JWL-002", name: "Rose Quartz Bracelet", price: 32.50, material: 'Rose Quartz', stock: 8, rating: 4.9, reviews: 31, size: '7.5 inches', image: "/products/rose-quartz-bracelet.png", description: "Delicate bracelet with rose quartz beads and silver clasp" },
    { id: 3, sku: "JWL-003", name: "Turquoise Earrings", price: 28.00, material: 'Turquoise', stock: 2, rating: 4.7, reviews: 18, size: '1.5 inches drop', image: "/products/turquoise-earrings.png", description: "Stunning turquoise drop earrings with sterling silver hooks" },
    { id: 4, sku: "BDS-101", name: "Glass Bead Mix - Ocean", price: 12.99, material: 'Glass', stock: 15, rating: 4.6, reviews: 42, size: '100g / 4-8mm', image: "/products/ocean-beads.png", description: "100g mix of blue and teal glass beads in various sizes" },
    { id: 5, sku: "BDS-102", name: "Crystal Bead Set", price: 18.50, material: 'Crystal', stock: 12, rating: 4.8, reviews: 27, size: '50 pcs / 8mm', image: "/products/crystal-beads.png", description: "Premium crystal beads, 50 pieces, 8mm diameter" },
    { id: 6, sku: "KIT-201", name: "Beginner Jewelry Kit", price: 35.00, material: 'Mixed', stock: 5, rating: 4.9, reviews: 56, size: 'Complete Set', image: "/products/beginner-kit.png", description: "Complete starter kit with beads, wire, tools, and instructions" },
    { id: 7, sku: "NCK-101", name: "Pearl Strand Necklace", price: 89.99, material: 'Pearl', stock: 6, rating: 4.9, reviews: 15, size: '20 inches', image: "/products/amethyst-necklace.png", description: "Classic freshwater pearl necklace with gold clasp" },
    { id: 8, sku: "NCK-102", name: "Gemstone Pendant", price: 52.00, material: 'Mixed Gemstones', stock: 4, rating: 4.7, reviews: 12, size: '16 inches chain', image: "/products/amethyst-necklace.png", description: "Natural gemstone pendant on sterling silver chain" },
    { id: 9, sku: "BRC-201", name: "Leather Wrap Bracelet", price: 24.99, material: 'Leather', stock: 10, rating: 4.6, reviews: 22, size: 'Adjustable', image: "/products/rose-quartz-bracelet-2.png", description: "Handwoven leather bracelet with metal accents" },
    { id: 10, sku: "BRC-202", name: "Charm Bracelet", price: 38.50, material: 'Silver', stock: 7, rating: 4.8, reviews: 19, size: '7 inches', image: "/products/rose-quartz-bracelet.png", description: "Silver charm bracelet with customizable charms" },
    { id: 11, sku: "EAR-301", name: "Hoop Earrings Set", price: 19.99, material: 'Gold Plated', stock: 12, rating: 4.5, reviews: 28, size: 'Small/Med/Large', image: "/products/turquoise-earrings.png", description: "Set of 3 gold-plated hoop earrings in different sizes" },
    { id: 12, sku: "EAR-302", name: "Crystal Stud Earrings", price: 22.00, material: 'Crystal', stock: 15, rating: 4.7, reviews: 33, size: '6mm', image: "/products/turquoise-earrings.png", description: "Sparkling crystal stud earrings with hypoallergenic posts" },
    { id: 13, sku: "BDS-201", name: "Wooden Bead Collection", price: 15.99, material: 'Wood', stock: 20, rating: 4.4, reviews: 18, size: '200g / Mixed', image: "/products/crystal-beads.png", description: "Natural wooden beads in assorted shapes and sizes" },
    { id: 14, sku: "KIT-301", name: "Advanced Beading Kit", price: 65.00, material: 'Mixed', stock: 3, rating: 4.9, reviews: 41, size: 'Complete Set', image: "/products/beginner-kit.png", description: "Professional beading kit with premium materials and tools" },
    { id: 15, sku: "KIT-302", name: "Earring Making Kit", price: 28.50, material: 'Mixed', stock: 8, rating: 4.6, reviews: 25, size: 'Starter Set', image: "/products/beginner-kit.png", description: "Everything you need to create beautiful earrings at home" },
    { id: 16, sku: "TLS-401", name: "Jewelry Pliers Set", price: 32.99, material: 'Metal', stock: 10, rating: 4.8, reviews: 37, size: '3-piece', image: "/products/beginner-kit.png", description: "Professional 3-piece pliers set for jewelry making" },
    { id: 17, sku: "TLS-402", name: "Beading Mat & Organizer", price: 18.99, material: 'Fabric', stock: 14, rating: 4.5, reviews: 21, size: '12x18 inches', image: "/products/beginner-kit.png", description: "Non-slip beading mat with compartment organizer" },
    { id: 18, sku: "TLS-403", name: "Wire Cutters & Crimpers", price: 24.50, material: 'Metal', stock: 11, rating: 4.7, reviews: 29, size: '2-piece', image: "/products/beginner-kit.png", description: "Precision wire cutters and crimping tool set" },
  ];

  const wishlistProducts = allProducts.filter(product => wishlist.includes(product.id));

  const handleShareWishlist = () => {
    const productNames = wishlistProducts.map(p => p.name).join(', ');
    const url = window.location.origin + '/wishlist';
    const text = `Check out my wishlist from Posh Beadery!\n\nProducts: ${productNames}\n\n${url}`;
    
    navigator.clipboard.writeText(text);
    alert('Wishlist link copied to clipboard!');
    setShowShareModal(false);
  };

  const handleEmailWishlist = () => {
    const productList = wishlistProducts.map(p => `${p.name} - $${p.price}`).join('\n');
    const subject = 'My Posh Beadery Wishlist';
    const body = `Hi! I'd love to share my wishlist from Posh Beadery with you:\n\n${productList}\n\nVisit: ${window.location.origin}/products`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setShowShareModal(false);
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Header />
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">My Wishlist</h1>
              <div className="bg-white rounded-lg shadow-md p-12 max-w-2xl mx-auto">
                <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
                <p className="text-gray-600 mb-6">Save your favorite items to your wishlist!</p>
                <Link href="/products" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">My Wishlist ({wishlistProducts.length})</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setShowShareModal(true)}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Wishlist
              </button>
              <button
                onClick={clearWishlist}
                className="px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-semibold"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  {product.stock <= 5 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Only {product.stock} left!
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  
                  <div className="flex gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Material:</span>
                      <span className="text-gray-600 ml-1">{product.material}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Size:</span>
                      <span className="text-gray-600 ml-1">{product.size}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products" className="text-purple-600 hover:text-purple-700 font-semibold">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </section>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Wishlist</h3>
            <p className="text-gray-600 mb-6">Let friends and family know what you'd love to receive!</p>
            <div className="space-y-3">
              <button
                onClick={handleEmailWishlist}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Wishlist
              </button>
              <button
                onClick={handleShareWishlist}
                className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
