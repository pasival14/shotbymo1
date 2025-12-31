
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
}

export interface GalleryProject {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

export interface AIConceptResponse {
  vibe: string;
  scenes: {
    visual: string;
    audio: string;
  }[];
  tips: string[];
}
