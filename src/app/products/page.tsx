'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import Header from '@/components/Header';

type Category = 'all' | 'necklaces' | 'bracelets' | 'earrings' | 'beads' | 'kits' | 'tools';

function ProductsContent() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;
  const searchQuery = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState<Category>(categoryParam || 'all');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showShareModal, setShowShareModal] = useState<number | null>(null);

  // Update active category when URL parameter changes
  useEffect(() => {
    if (categoryParam && ['all', 'necklaces', 'bracelets', 'earrings', 'beads', 'kits', 'tools'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const allProducts = [
    // Existing products for "All" tab
    {
      id: 1,
      sku: "JWL-001",
      name: "Amethyst Crystal Necklace",
      price: 45.99,
      category: 'necklaces' as Category,
      material: 'Amethyst',
      stock: 3,
      rating: 4.8,
      reviews: 24,
      size: '18 inches',
      image: "/products/amethyst-necklace.png",
      description: "Elegant handcrafted necklace featuring genuine amethyst crystals"
    },
    {
      id: 2,
      sku: "JWL-002",
      name: "Rose Quartz Bracelet",
      price: 32.50,
      category: 'bracelets' as Category,
      material: 'Rose Quartz',
      stock: 8,
      rating: 4.9,
      reviews: 31,
      size: '7.5 inches',
      image: "/products/rose-quartz-bracelet.png",
      description: "Delicate bracelet with rose quartz beads and silver clasp"
    },
    {
      id: 3,
      sku: "JWL-003",
      name: "Turquoise Earrings",
      price: 28.00,
      category: 'earrings' as Category,
      material: 'Turquoise',
      stock: 2,
      rating: 4.7,
      reviews: 18,
      size: '1.5 inches drop',
      image: "/products/turquoise-earrings.png",
      description: "Stunning turquoise drop earrings with sterling silver hooks"
    },
    {
      id: 4,
      sku: "BDS-101",
      name: "Glass Bead Mix - Ocean",
      price: 12.99,
      category: 'beads' as Category,
      material: 'Glass',
      stock: 15,
      rating: 4.6,
      reviews: 42,
      size: '100g / 4-8mm',
      image: "/products/ocean-beads.png",
      description: "100g mix of blue and teal glass beads in various sizes"
    },
    {
      id: 5,
      sku: "BDS-102",
      name: "Crystal Bead Set",
      price: 18.50,
      category: 'beads' as Category,
      material: 'Crystal',
      stock: 12,
      rating: 4.8,
      reviews: 27,
      size: '50 pcs / 8mm',
      image: "/products/crystal-beads.png",
      description: "Premium crystal beads, 50 pieces, 8mm diameter"
    },
    {
      id: 6,
      sku: "KIT-201",
      name: "Beginner Jewelry Kit",
      price: 35.00,
      category: 'kits' as Category,
      material: 'Mixed',
      stock: 5,
      rating: 4.9,
      reviews: 56,
      size: 'Complete Set',
      image: "/products/beginner-kit.png",
      description: "Complete starter kit with beads, wire, tools, and instructions"
    },
    // Additional products for each category
    {
      id: 7,
      sku: "NCK-101",
      name: "Pearl Strand Necklace",
      price: 89.99,
      category: 'necklaces' as Category,
      material: 'Pearl',
      stock: 6,
      rating: 4.9,
      reviews: 15,
      size: '20 inches',
      image: "/products/amethyst-necklace.png",
      description: "Classic freshwater pearl necklace with gold clasp"
    },
    {
      id: 8,
      sku: "NCK-102",
      name: "Gemstone Pendant",
      price: 52.00,
      category: 'necklaces' as Category,
      material: 'Mixed Gemstones',
      stock: 4,
      rating: 4.7,
      reviews: 12,
      size: '16 inches chain',
      image: "/products/amethyst-necklace.png",
      description: "Natural gemstone pendant on sterling silver chain"
    },
    {
      id: 9,
      sku: "BRC-201",
      name: "Leather Wrap Bracelet",
      price: 24.99,
      category: 'bracelets' as Category,
      material: 'Leather',
      stock: 10,
      rating: 4.6,
      reviews: 22,
      size: 'Adjustable',
      image: "/products/rose-quartz-bracelet-2.png",
      description: "Handwoven leather bracelet with metal accents"
    },
    {
      id: 10,
      sku: "BRC-202",
      name: "Charm Bracelet",
      price: 38.50,
      category: 'bracelets' as Category,
      material: 'Silver',
      stock: 7,
      rating: 4.8,
      reviews: 19,
      size: '7 inches',
      image: "/products/rose-quartz-bracelet.png",
      description: "Silver charm bracelet with customizable charms"
    },
    {
      id: 11,
      sku: "EAR-301",
      name: "Hoop Earrings Set",
      price: 19.99,
      category: 'earrings' as Category,
      material: 'Gold Plated',
      stock: 14,
      rating: 4.5,
      reviews: 33,
      size: 'Small, Medium, Large',
      image: "/products/turquoise-earrings.png",
      description: "Set of 3 gold-plated hoop earrings in different sizes"
    },
    {
      id: 12,
      sku: "EAR-302",
      name: "Crystal Stud Earrings",
      price: 22.00,
      category: 'earrings' as Category,
      material: 'Crystal',
      stock: 9,
      rating: 4.7,
      reviews: 28,
      size: '6mm',
      image: "/products/turquoise-earrings.png",
      description: "Sparkling crystal stud earrings with hypoallergenic posts"
    },
    {
      id: 13,
      sku: "BDS-201",
      name: "Wooden Bead Collection",
      price: 15.99,
      category: 'beads' as Category,
      material: 'Wood',
      stock: 20,
      rating: 4.4,
      reviews: 37,
      size: '150g / 6-12mm',
      image: "/products/crystal-beads.png",
      description: "Natural wooden beads in assorted shapes and sizes"
    },
    {
      id: 14,
      sku: "KIT-301",
      name: "Advanced Beading Kit",
      price: 65.00,
      category: 'kits' as Category,
      material: 'Mixed',
      stock: 4,
      rating: 4.9,
      reviews: 41,
      size: 'Premium Set',
      image: "/products/beginner-kit.png",
      description: "Professional beading kit with premium materials and tools"
    },
    {
      id: 15,
      sku: "KIT-302",
      name: "Earring Making Kit",
      price: 28.50,
      category: 'kits' as Category,
      material: 'Mixed',
      stock: 11,
      rating: 4.6,
      reviews: 29,
      size: 'Starter Set',
      image: "/products/beginner-kit.png",
      description: "Everything you need to create beautiful earrings at home"
    },
    {
      id: 16,
      sku: "TLS-401",
      name: "Jewelry Pliers Set",
      price: 32.99,
      category: 'tools' as Category,
      material: 'Metal',
      stock: 8,
      rating: 4.8,
      reviews: 52,
      size: '3-piece set',
      image: "/products/beginner-kit.png",
      description: "Professional 3-piece pliers set for jewelry making"
    },
    {
      id: 17,
      sku: "TLS-402",
      name: "Beading Mat & Organizer",
      price: 18.99,
      category: 'tools' as Category,
      material: 'Fabric',
      stock: 16,
      rating: 4.5,
      reviews: 44,
      size: '12" x 9"',
      image: "/products/beginner-kit.png",
      description: "Non-slip beading mat with compartment organizer"
    },
    {
      id: 18,
      sku: "TLS-403",
      name: "Wire Cutters & Crimpers",
      price: 24.50,
      category: 'tools' as Category,
      material: 'Metal',
      stock: 13,
      rating: 4.7,
      reviews: 38,
      size: '2-piece set',
      image: "/products/beginner-kit.png",
      description: "Precision wire cutters and crimping tool set"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'bracelets', name: 'Bracelets' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'beads', name: 'Beads' },
    { id: 'kits', name: 'DIY Kits' },
    { id: 'tools', name: 'Tools' }
  ];

  // Get unique materials for filter
  const materials = ['all', ...Array.from(new Set(allProducts.map(p => p.material)))];

  // Filter products by search query first, or by category
  let filteredProducts;
  
  if (searchQuery) {
    // If searching, search through ALL products
    filteredProducts = allProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    // Otherwise filter by category
    filteredProducts = activeCategory === 'all' 
      ? allProducts.slice(0, 6) // Show only the first 6 for "All Products"
      : allProducts.filter(product => product.category === activeCategory);
  }

  // Apply material filter
  if (selectedMaterial !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.material === selectedMaterial);
  }

  // Apply price range filter
  filteredProducts = filteredProducts.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Apply sorting
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  const clearFilters = () => {
    setPriceRange([0, 100]);
    setSelectedMaterial('all');
    setSortBy('featured');
  };

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart(product);
    setAddedToCart(product.id);
    
    // Reset the button state after 2 seconds
    setTimeout(() => {
      setAddedToCart(null);
    }, 2000);
  };

  const toggleWishlist = (productId: number) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  const handleShare = (product: typeof allProducts[0], method: string) => {
    const url = `${window.location.origin}/products?search=${encodeURIComponent(product.name)}`;
    const text = `Check out this ${product.name} from Posh Beadery!`;
    
    if (method === 'email') {
      window.location.href = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${url}\n\nPrice: $${product.price}\n${product.description}`)}`;
    } else if (method === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
    setShowShareModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Products</h1>
          {searchQuery ? (
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Search results for "<span className="font-semibold text-purple-600">{searchQuery}</span>" 
              ({filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found)
            </p>
          ) : (
            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
              Browse our collection of handmade jewelry, premium beads, and DIY kits
            </p>
          )}

          {/* Category Tabs - Hide when searching */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as Category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* Filters and Sort Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
              
              <div className="flex items-center gap-4">
                <span className="text-gray-600">{filteredProducts.length} products</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>
              </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-white p-6 rounded-lg border border-gray-300 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Material Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Material</label>
                    <select
                      value={selectedMaterial}
                      onChange={(e) => setSelectedMaterial(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      {materials.map((material) => (
                        <option key={material} value={material}>
                          {material === 'all' ? 'All Materials' : material}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Min"
                      />
                      <span>-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Max"
                      />
                    </div>
                  </div>

                  {/* Clear Filters Button */}
                  <div className="flex items-end">
                    <button
                      onClick={clearFilters}
                      className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                    >
                      Clear All Filters
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative">
                {/* Wishlist & Share Buttons */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Add to wishlist"
                  >
                    <svg className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setShowShareModal(product.id)}
                    className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Share product"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>

                {/* Stock Urgency Badge */}
                {product.stock !== undefined && product.stock <= 5 && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Only {product.stock} left!
                    </span>
                  </div>
                )}

                <div className="w-full h-64 bg-white flex items-center justify-center p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  {/* Rating */}
                  {product.rating !== undefined && product.reviews !== undefined && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <span className="text-sm text-gray-500">SKU: {product.sku}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  
                  {/* Material & Size */}
                  <div className="flex gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Material:</span>
                      <span className="text-gray-600 ml-1">{product.material}</span>
                    </div>
                    {product.size && (
                      <div>
                        <span className="font-semibold text-gray-700">Size:</span>
                        <span className="text-gray-600 ml-1">{product.size}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      disabled={addedToCart === product.id}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all transform ${
                        addedToCart === product.id
                          ? 'bg-green-500 text-white scale-105'
                          : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                      }`}
                    >
                      {addedToCart === product.id ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Added!
                        </span>
                      ) : (
                        'Add to Cart'
                      )}
                    </button>
                  </div>
                </div>

                {/* Share Modal */}
                {showShareModal === product.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20 rounded-lg">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4">
                      <h4 className="text-lg font-semibold mb-4">Share this product</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => handleShare(product, 'email')}
                          className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Drop a Hint (Email)
                        </button>
                        <button
                          onClick={() => handleShare(product, 'copy')}
                          className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          Copy Link
                        </button>
                        <button
                          onClick={() => setShowShareModal(null)}
                          className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Products() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
