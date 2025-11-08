'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (productId: number) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('posh-beadery-wishlist');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (error) {
      console.error('Error loading wishlist:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('posh-beadery-wishlist', JSON.stringify(wishlist));
      } catch (error) {
        console.error('Error saving wishlist:', error);
      }
    }
  }, [wishlist, isLoaded]);

  const addToWishlist = (productId: number) => {
    setWishlist((prev) => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.includes(productId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
