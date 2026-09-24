import { useState, useEffect } from 'react';
import { SiteData, ServiceItem, GalleryItem } from '../types';
import { INITIAL_SITE_DATA } from '../data/defaultData';

const STORAGE_KEY = 'aguia_transportes_data_v2';

export function useSiteData() {
  const [data, setData] = useState<SiteData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed.services) && Array.isArray(parsed.gallery)) {
          return parsed;
        }
      }
    } catch {
      // Fallback to default
    }
    return INITIAL_SITE_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('LocalStorage save error (likely quota):', e);
    }
  }, [data]);

  const addService = (service: Omit<ServiceItem, 'id'>) => {
    const newItem: ServiceItem = {
      ...service,
      id: 'srv-' + Date.now(),
    };
    setData((prev) => ({
      ...prev,
      services: [...prev.services, newItem],
    }));
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.map((s) => (s.id === id ? { ...s, ...updated } : s)),
    }));
  };

  const deleteService = (id: string) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.id !== id),
    }));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: 'gal-' + Date.now(),
    };
    setData((prev) => ({
      ...prev,
      gallery: [...prev.gallery, newItem],
    }));
  };

  const deleteGalleryItem = (id: string) => {
    setData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((g) => g.id !== id),
    }));
  };

  const resetToDefaults = () => {
    setData(INITIAL_SITE_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return {
    data,
    addService,
    updateService,
    deleteService,
    addGalleryItem,
    deleteGalleryItem,
    resetToDefaults,
  };
}
