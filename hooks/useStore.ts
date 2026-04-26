import { create } from 'zustand';
import { Product, products } from '@/lib/products';

interface ProductState {
  allProducts: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  category: string;
  sortBy: 'price-asc' | 'price-desc' | 'default';
  priceRange: [number, number];
  
  setSearchQuery: (query: string) => void;
  setCategory: (category: string) => void;
  setSortBy: (sort: 'price-asc' | 'price-desc' | 'default') => void;
  setPriceRange: (range: [number, number]) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  allProducts: products,
  filteredProducts: products,
  searchQuery: '',
  category: 'All',
  sortBy: 'default',
  priceRange: [0, 10000000],

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  setCategory: (category) => {
    set({ category });
    get().applyFilters();
  },

  setSortBy: (sort) => {
    set({ sortBy: sort });
    get().applyFilters();
  },

  setPriceRange: (range) => {
    set({ priceRange: range });
    get().applyFilters();
  },

  applyFilters: () => {
    const { allProducts, searchQuery, category, sortBy, priceRange } = get();
    
    let filtered = allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    set({ filteredProducts: filtered });
  },

  resetFilters: () => {
    set({
      searchQuery: '',
      category: 'All',
      sortBy: 'default',
      priceRange: [0, 10000000],
      filteredProducts: products,
    });
  },
}));
