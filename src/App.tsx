import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialSection } from './components/SocialSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { QuoteSection } from './components/QuoteSection';
import { GoogleSection } from './components/GoogleSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PanelIndicator } from './components/PanelIndicator';
import { LightboxModal } from './components/LightboxModal';
import { EditModal } from './components/EditModal';
import { useSiteData } from './hooks/useSiteData';
import { GalleryItem, ServiceItem } from './types';

export default function App() {
  const {
    data,
    addService,
    updateService,
    deleteService,
    addGalleryItem,
    deleteGalleryItem,
    resetToDefaults,
  } = useSiteData();

  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState<ServiceItem | null>(null);

  const handleEditService = (service: ServiceItem) => {
    setServiceToEdit(service);
    setIsManageModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#050505] text-[#f8fafc] flex flex-col relative selection:bg-red-600 selection:text-white">
      {/* 3-zone Header Navigation */}
      <Navbar onOpenManageModal={() => setIsManageModalOpen(true)} />

      {/* Main Vertical Scroll Panels */}
      <main className="flex-1 flex flex-col w-full max-w-full overflow-x-hidden">
        {/* Panel 1: Hero */}
        <HeroSection />

        {/* Panel 2: Redes e Contato (3D Cards) */}
        <SocialSection />

        {/* Panel 3: Nossos Serviços (Editable) */}
        <ServicesSection
          services={data.services}
          onOpenManageModal={() => {
            setServiceToEdit(null);
            setIsManageModalOpen(true);
          }}
          onEditService={handleEditService}
        />

        {/* Panel 4: Águia na Estrada (Galeria Carrossel) */}
        <GallerySection
          gallery={data.gallery}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onOpenManageModal={() => {
            setServiceToEdit(null);
            setIsManageModalOpen(true);
          }}
        />

        {/* Panel 5: Chamada para Orçamento */}
        <QuoteSection />

        {/* Panel 6: Google */}
        <GoogleSection />
      </main>

      {/* Panel 7: Rodapé Elegante */}
      <Footer onOpenManageModal={() => setIsManageModalOpen(true)} />

      {/* Vertical Navigation Tracking Dots */}
      <PanelIndicator />

      {/* 3D Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Lightbox Modal for Gallery Fullscreen Preview */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />

      {/* Content Management Drawer/Modal for Real Photos & Services */}
      <EditModal
        isOpen={isManageModalOpen}
        onClose={() => {
          setIsManageModalOpen(false);
          setServiceToEdit(null);
        }}
        services={data.services}
        gallery={data.gallery}
        onAddService={addService}
        onUpdateService={updateService}
        onDeleteService={deleteService}
        onAddGalleryItem={addGalleryItem}
        onDeleteGalleryItem={deleteGalleryItem}
        onResetDefaults={resetToDefaults}
        initialEditingService={serviceToEdit}
      />
    </div>
  );
}
