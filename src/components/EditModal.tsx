import React, { useState } from 'react';
import { ServiceItem, GalleryItem } from '../types';
import { X, Upload, Trash2, Edit2, Plus, RotateCcw, Check } from 'lucide-react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  gallery: GalleryItem[];
  onAddService: (service: Omit<ServiceItem, 'id'>) => void;
  onUpdateService: (id: string, updated: Partial<ServiceItem>) => void;
  onDeleteService: (id: string) => void;
  onAddGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  onDeleteGalleryItem: (id: string) => void;
  onResetDefaults: () => void;
  initialEditingService?: ServiceItem | null;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  services,
  gallery,
  onAddService,
  onUpdateService,
  onDeleteService,
  onAddGalleryItem,
  onDeleteGalleryItem,
  onResetDefaults,
  initialEditingService,
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'gallery'>('services');

  // Form states for services
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceName, setServiceName] = useState('');
  const [serviceDesc, setServiceDesc] = useState('');
  const [serviceImg, setServiceImg] = useState('');

  // Form states for gallery
  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryCategory, setGalleryCategory] = useState('Viagens & Transfer');
  const [galleryImg, setGalleryImg] = useState('');

  const [savedNotice, setSavedNotice] = useState(false);

  React.useEffect(() => {
    if (initialEditingService) {
      setActiveTab('services');
      startEditService(initialEditingService);
    }
  }, [initialEditingService]);

  if (!isOpen) return null;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setter(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const startEditService = (service: ServiceItem) => {
    setEditingServiceId(service.id);
    setServiceName(service.name);
    setServiceDesc(service.description);
    setServiceImg(service.image);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceName.trim()) return;

    if (editingServiceId) {
      onUpdateService(editingServiceId, {
        name: serviceName.trim(),
        description: serviceDesc.trim(),
        image: serviceImg || '/logo-transparent.png',
        isCustomImage: true,
      });
    } else {
      onAddService({
        name: serviceName.trim(),
        description: serviceDesc.trim(),
        image: serviceImg || '/logo-transparent.png',
        isCustomImage: true,
      });
    }

    setEditingServiceId(null);
    setServiceName('');
    setServiceDesc('');
    setServiceImg('');
    triggerNotice();
  };

  const handleSaveGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryTitle.trim() || !galleryImg) return;

    onAddGalleryItem({
      title: galleryTitle.trim(),
      category: galleryCategory.trim() || 'Operações',
      image: galleryImg,
      isCustomImage: true,
    });

    setGalleryTitle('');
    setGalleryImg('');
    triggerNotice();
  };

  const triggerNotice = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c10] border border-white/15 rounded-2xl flex flex-col shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-500">
              Painel de Conteúdo
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white font-heading">
              Gerenciar Fotos e Serviços da Águia
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 px-6 bg-black/20">
          <button
            onClick={() => setActiveTab('services')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'services'
                ? 'border-red-600 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Serviços ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'gallery'
                ? 'border-red-600 text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Galeria na Estrada ({gallery.length})
          </button>
        </div>

        {/* Notice */}
        {savedNotice && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Atualização salva com sucesso e aplicada ao site!</span>
          </div>
        )}

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'services' && (
            <div className="space-y-8">
              {/* Form to Add or Edit Service */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-red-500" />
                  <span>{editingServiceId ? 'Editar Serviço' : 'Adicionar Novo Serviço'}</span>
                </h3>

                <form onSubmit={handleSaveService} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Nome do Serviço
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: VIAGENS EXECUTIVAS REGIONAIS"
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Pequena Descrição
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Transporte privativo para executivos com conforto e discrição."
                      value={serviceDesc}
                      onChange={(e) => setServiceDesc(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-black border border-white/15 text-white text-sm focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Foto Real do Serviço
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <label className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10">
                        <Upload className="w-4 h-4 text-red-500" />
                        <span>Fazer Upload de Foto Real</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, setServiceImg)}
                        />
                      </label>
                      <span className="text-xs text-neutral-500">ou insira a URL da foto:</span>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={serviceImg.startsWith('data:') ? 'Foto carregada do dispositivo' : serviceImg}
                        onChange={(e) => setServiceImg(e.target.value)}
                        className="w-full sm:flex-1 px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-xs focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {serviceImg && (
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-xs text-neutral-400">Prévia:</span>
                      <img
                        src={serviceImg}
                        alt="Prévia"
                        className="w-16 h-12 object-cover rounded-lg border border-white/20"
                      />
                      <button
                        type="button"
                        onClick={() => setServiceImg('')}
                        className="text-xs text-red-400 hover:text-red-300"
                      >
                        Remover foto
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red"
                    >
                      {editingServiceId ? 'Salvar Alterações' : 'Cadastrar Serviço'}
                    </button>
                    {editingServiceId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingServiceId(null);
                          setServiceName('');
                          setServiceDesc('');
                          setServiceImg('');
                        }}
                        className="px-4 py-2.5 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white"
                      >
                        Cancelar Edição
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Existing Services List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Serviços Atuais Cadastrados
                </h4>
                <div className="space-y-3">
                  {services.map((srv) => (
                    <div
                      key={srv.id}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={srv.image}
                          alt={srv.name}
                          className="w-14 h-11 object-cover rounded-lg bg-neutral-900 border border-white/10 shrink-0"
                        />
                        <div className="truncate">
                          <h5 className="text-sm font-bold text-white uppercase truncate">
                            {srv.name}
                          </h5>
                          <p className="text-xs text-neutral-400 truncate">{srv.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => startEditService(srv)}
                          title="Editar serviço"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteService(srv.id)}
                          title="Excluir serviço"
                          className="p-2 rounded-lg bg-white/5 hover:bg-red-600/80 text-neutral-300 hover:text-white transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8">
              {/* Form to Add Gallery Item */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-red-500" />
                  <span>Adicionar Foto Real na Galeria</span>
                </h3>

                <form onSubmit={handleSaveGallery} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        Título ou Legenda
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Atendimento no Aeroporto"
                        value={galleryTitle}
                        onChange={(e) => setGalleryTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:border-red-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                        Categoria
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Viagens, Executivo, Eventos"
                        value={galleryCategory}
                        onChange={(e) => setGalleryCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                      Foto Real da Operação
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <label className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10">
                        <Upload className="w-4 h-4 text-red-500" />
                        <span>Fazer Upload de Foto</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, setGalleryImg)}
                        />
                      </label>
                      <span className="text-xs text-neutral-500">ou URL:</span>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={galleryImg.startsWith('data:') ? 'Foto carregada do dispositivo' : galleryImg}
                        onChange={(e) => setGalleryImg(e.target.value)}
                        className="w-full sm:flex-1 px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-xs focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {galleryImg && (
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-xs text-neutral-400">Prévia:</span>
                      <img
                        src={galleryImg}
                        alt="Prévia"
                        className="w-20 h-14 object-cover rounded-lg border border-white/20"
                      />
                      <button
                        type="button"
                        onClick={() => setGalleryImg('')}
                        className="text-xs text-red-400 hover:text-red-300"
                      >
                        Remover foto
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!galleryImg || !galleryTitle.trim()}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white btn-3d-red disabled:opacity-50"
                  >
                    Adicionar à Galeria
                  </button>
                </form>
              </div>

              {/* Current Gallery Photos */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Fotos na Estrada Cadastradas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gallery.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10 gap-3"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-12 object-cover rounded-lg bg-neutral-900 border border-white/10 shrink-0"
                        />
                        <div className="truncate">
                          <h5 className="text-xs font-bold text-white uppercase truncate">
                            {item.title}
                          </h5>
                          <p className="text-[11px] text-red-400 truncate">{item.category}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => onDeleteGalleryItem(item.id)}
                        title="Excluir foto da galeria"
                        className="p-2 rounded-lg bg-white/5 hover:bg-red-600/80 text-neutral-300 hover:text-white transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Reset Defaults */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
          <button
            onClick={() => {
              if (confirm('Tem certeza que deseja redefinir fotos e serviços para os padrões originais?')) {
                onResetDefaults();
                triggerNotice();
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-red-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Padrões</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
