import sedanImg from '../assets/images/service_sedan_executivo_1790223569129.jpg';
import transferImg from '../assets/images/service_transfer_aeroporto_1790223578397.jpg';
import eventoImg from '../assets/images/service_evento_vip_1790223588692.jpg';
import estradaImg from '../assets/images/galeria_estrada_viagem_1790223598565.jpg';
import { SiteData } from '../types';

export const LINKS = {
  whatsapp: 'https://wa.me/message/UQRLFQWDB36DI1',
  whatsappOrcamentos: 'https://wa.me/553499581578',
  instagram: 'https://www.instagram.com/aguia_transportesudi?igsh=MWVrMmFyaHcxOXE5bg==',
  google: 'https://share.google/NQhARgCzLLajB65Jv',
  logo: '/logo-transparent.png',
  logoOriginal: 'https://i.postimg.cc/xdDqV9kQ/Whats-App-Image-2026-06-24-at-15-27-44.jpg',
};

export const DEFAULT_SERVICES = [
  {
    id: 'transporte-particular',
    name: 'TRANSPORTE PARTICULAR',
    description: 'Deslocamentos com conforto, segurança e pontualidade.',
    image: sedanImg,
  },
  {
    id: 'transporte-executivo',
    name: 'TRANSPORTE EXECUTIVO',
    description: 'Atendimento para empresas, reuniões, compromissos e viagens.',
    image: sedanImg,
  },
  {
    id: 'transporte-eventos',
    name: 'TRANSPORTE PARA EVENTOS',
    description: 'Transporte para festas, shows, festivais e grandes eventos.',
    image: eventoImg,
  },
  {
    id: 'viagens-transfer',
    name: 'VIAGENS E TRANSFER',
    description: 'Transferências e viagens intermunicipais com atendimento personalizado.',
    image: transferImg,
  },
  {
    id: 'fretes-entregas',
    name: 'FRETES E ENTREGAS',
    description: 'Coletas, entregas e transporte de encomendas e volumes.',
    image: sedanImg,
  },
  {
    id: 'motorista-particular',
    name: 'SERVIÇO DE MOTORISTA PARTICULAR',
    description: 'Motorista particular para acompanhar sua agenda e compromissos.',
    image: transferImg,
  },
];

export const DEFAULT_GALLERY = [
  {
    id: 'galeria-1',
    title: 'Frota Executiva na Estrada',
    category: 'Viagens & Transfer',
    image: estradaImg,
  },
  {
    id: 'galeria-2',
    title: 'Atendimento Executivo Corporativo',
    category: 'Transporte Executivo',
    image: sedanImg,
  },
  {
    id: 'galeria-3',
    title: 'Recepção VIP & Aeroportos',
    category: 'Transfer Privativo',
    image: transferImg,
  },
  {
    id: 'galeria-4',
    title: 'Chegada em Eventos Especiais',
    category: 'Eventos & Cerimoniais',
    image: eventoImg,
  },
];

export const INITIAL_SITE_DATA: SiteData = {
  services: DEFAULT_SERVICES,
  gallery: DEFAULT_GALLERY,
};
