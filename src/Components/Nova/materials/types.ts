export enum CATEGORY {
  Ink = "Paste",
  Substrate = "Substrate",
  Unknown = "Unknown",
}

export interface Material {
  id: string;
  custom: boolean;
  preload: boolean;

  name: string;
  category: CATEGORY;
  type: string;
  subtype: string;

  sharing: {
    received: boolean;
    date: null | number;
    sender: null | string;
  };

  icon: string;
  notes: string;

  details: Store;
  batches: Batch[];
}

export interface Store {
  description: string;
  applications: string;
  certified: boolean;
  manufacturer_name: string;
  manufacturer_part_no: string;
  voltera_part_no: string;
  price_sample: string;
  price_bulk: string;

  specs: {
    // These are just examples
    resistance?: string;
    curing?: string;
    color?: string;
    viscosity?: string;
    shelf_life?: string;
    nozzle_size?: string;
  };

  // Snapshot - Star Rating
  summary: {
    // These are just examples
    conductivity?: number;
    dispensing?: number;
    adhesion?: number;
  };

  // Array of for the gallery.

  images: string[];
  video: {
    thumbnail: string;
    url: string;
  };
  downloads: Link[];
}

export interface Link {
  name: string;
  url: string;
}

export interface Batch {
  id: string;
  name: string;
  description: string;
  expiration: number;

  settings: Settings;
}

export interface Settings {
  ink: Ink;
  substrate: Substrate;
}

export interface Ink {
  xySpeed: number;
  zSpeed: number;
  passSpacing: number;
  dispensePressure: number;
  dispenseThreshold: number;
  reliefPressure: number;
  reliefThreshold: number;
  reliefOffset: number;
  dispenseHeight: number;
  preheatTemperature: number;
  minRaiseHeight: number;

  // Unused
  nozzleDiameter: number;
  trimLength: number;
}
export interface Substrate {
  probePitch: number;
  minRaiseHeight: number;
  maxTemperature: number;
  thickness: number;
  vacuumRequired: number;
  color: number;
  stretchable: number;
  compression: number;
  camera: number;
  probeZSpeed: number;
}
export interface PressureUpdate {
  dispensePressure: number;
  dispenseThreshold: number;
  reliefThreshold: number;
  reliefPressure: number;
}
