export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  device: string;
  text: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  device: string;
  model: string;
  problem: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface DifferentiatorItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
