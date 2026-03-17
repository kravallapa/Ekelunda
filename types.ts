export interface Horse {
  id: number;
  name: string;
  birthYear: number;
  color: string;
  gender: 'Sto' | 'Valack' | 'Hingst';
  description: string;
  imageUrl: string;
  lineage?: string;
  sire?: string;
  dam?: string;
}

export interface SoldHorse {
  name: string;
}

export enum PageView {
  HOME = 'HOME',
  HORSES = 'HORSES',
  BREEDING = 'BREEDING',
  CONTACT = 'CONTACT'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}