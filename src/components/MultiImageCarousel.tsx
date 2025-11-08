'use client';

import { useState, useEffect } from 'react';

interface MultiImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
  imagesPerSlide?: number;
}

export default function MultiImageCarousel({ 
  images, 
  autoPlayInterval = 5000,
  imagesPerSlide = 3 
}: MultiImageCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Calculate total pages
  const totalPages = Math.ceil(images.length / imagesPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [totalPages, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Get images for current page
  const startIndex = currentPage * imagesPerSlide;
  const currentImages = images.slice(startIndex, startIndex + imagesPerSlide);

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-xl bg-white">
      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 min-h-[400px]">
        {currentImages.map((image, index) => (
          <div
            key={startIndex + index}
            className="flex items-center justify-center bg-white"
          >
            <img
              src={image}
              alt={`Product ${startIndex + index + 1}`}
              className="w-full h-[400px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous page"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
        aria-label="Next page"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentPage
                ? 'bg-purple-600 w-8'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
