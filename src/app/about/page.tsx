import Header from '@/components/Header';
import Carousel from '@/components/Carousel';

export default function About() {
  const founderImages = [
    '/founder/founder-1.png',
    '/founder/founder-2.png',
    '/founder/founder-3.png'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Posh Beadery</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/about/story.png" 
                alt="Jewelry making workspace"
                className="rounded-lg shadow-lg w-full object-contain bg-white p-4"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2014, Posh Beadery began as a passion project in a small home studio. 
                What started with a love for creating unique jewelry pieces has grown into a thriving 
                business serving crafters and jewelry enthusiasts worldwide.
              </p>
              <p className="text-lg text-gray-600">
                Today, we pride ourselves on offering high-quality handmade jewelry and premium beading 
                supplies, along with the expertise and support to help you bring your creative visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                We believe everyone has the ability to create something beautiful. Our mission is to 
                provide the tools, materials, and inspiration needed to turn creative ideas into stunning 
                reality.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're looking for a unique handmade piece or want to craft your own jewelry, 
                we're here to support your journey every step of the way.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/about/mission.png" 
                alt="Beautiful handmade jewelry"
                className="rounded-lg shadow-lg w-full object-contain bg-white p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the finest materials and craft each piece with meticulous attention to detail.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💜</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Every creation is made with love and dedication to the art of jewelry making.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We're committed to supporting and inspiring our community of crafters and creators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet the Founder</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Founder Image Carousel */}
            <div className="max-w-md mx-auto mb-6">
              <Carousel images={founderImages} autoPlayInterval={4000} />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Anita Stanley</h3>
              <p className="text-purple-600 font-medium mb-4">Founder & Master Artisan</p>
              <p className="text-lg text-gray-600 mb-4">
                With over 15 years of experience in jewelry design and beadwork, Anita has dedicated 
                her life to the art of creating beautiful, wearable pieces.
              </p>
              <p className="text-lg text-gray-600 italic">
                "I believe that jewelry is more than just an accessory—it's a form of self-expression 
                and a way to carry beauty with you every day. My goal is to help others discover the 
                joy of creating their own unique pieces."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
