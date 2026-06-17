export interface AluminiumFinish {
  id: string;
  name: string;
  hex: string;
  description: string;
  gaugeOptions: string[];
}

export interface GlassType {
  id: string;
  name: string;
  className: string; // Tailwind filter or opacity classes
  bgColor: string;   // CSS color code
  opacity: number;
  description: string;
  thicknessOptions: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  specs: string[];
  approxPrice?: string;
  image?: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface EstimateFormData {
  serviceType: string;
  finishId: string;
  glassId: string;
  widthFt: number;
  heightFt: number;
  gaugePreference: string;
  glassThickness: string;
  additionalNotes: string;
  community: string;
}
