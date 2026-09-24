export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  isCustomImage?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  isCustomImage?: boolean;
}

export interface SiteData {
  services: ServiceItem[];
  gallery: GalleryItem[];
}
