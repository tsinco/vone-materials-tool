import { nanoid } from "nanoid/non-secure";
import { generate } from "./utils";

import {
  Material,
  Settings,
  Store,
  Batch,
  CATEGORY,
  Ink,
  Substrate,
} from "./types";

export function createFromTemplate(template: Material, batch_id: string) {
  template.id = nanoid(10);
  template.name = `${template.name} - Copy - ${nanoid(4)}`;
  template.custom = true;
  template.preload = false;
  template.details.certified = false;

  const batchIdx = template.batches.findIndex(
    (batch: Batch) => batch.id === batch_id
  );
  template.batches = [template.batches[batchIdx]];
  template.batches[0].id = nanoid(6);
  template.batches[0].name = `${template.batches[0].name} - Copy`;

  return template;
}

export function createNewMaterial(
  name?: string,
  category?: CATEGORY,
  type?: string,
  subtype?: string,
  notes?: string,
  batch?: string
): Material {
  return {
    id: nanoid(10), // Unique identifier

    custom: true, // Created by a user or official from Voltera?
    preload: false, // Material is preloaded and cannot be deleted.

    name: name || "New", // Human Readable Name i.e - Flex2
    category: category || CATEGORY.Unknown, // Level I    Category: Ink, Substrate
    type: type || "Unknown", // Level II   Function: Conductive, Stretchable, Resistive, Insulating, Solder Paste
    subtype: subtype || "Unknown", // Level III  Composition: Silver Based, Copper, Graphene, ....  TinBismuthSilver, etc

    // Sharing Information
    sharing: {
      received: false, // Was this material received ?
      date: null, // When was the material received?
      sender: null, // Who sent it to us?
    },

    icon: "url", // For official materials - A URL to the cartridge label.
    notes: notes || "", // For custom materials - A few notes about the material.

    // Information that lives in the web or in the 'explore' section of the app.
    details: createNewStore(),

    // Array of Batches
    batches: [createNewBatch(batch)],
  };
}

export function createNewStore(): Store {
  return {
    description: "", // Long Form HTML parragraph that details what they need to know.
    applications: "", //

    certified: false, // By Community, or Official ?
    manufacturer_name: "N/A", // Ex. ACI
    manufacturer_part_no: "N/A", // Ex. LT1A2
    voltera_part_no: "N/A", // Ex. VOLT-123
    price_sample: "N/A", // 49.99
    price_bulk: "N/A", // 24.99

    specs: {
      // These are just examples
      resistance: "N/A",
      curing: "N/A",
      color: "N/A",
      viscosity: "N/A",
      shelf_life: "N/A",
      nozzle_size: "N/A",
    },

    // Snapshot - Star Rating
    summary: {
      // These are just examples
      conductivity: 0,
      dispensing: 0,
      adhesion: 0,
    },

    // Array of for the gallery.
    images: ["url"],
    video: {
      thumbnail: "url",
      url: "url",
    },
    downloads: [
      // These are just examples
      {
        name: "Manufacturer Datasheet",
        url: "url",
      },
      {
        name: "MSDS",
        url: "url",
      },
      {
        name: "Test Report",
        url: "url",
      },
    ],
  };
}

export function createNewBatch(batchName?: string): Batch {
  return {
    id: nanoid(6), // Unique identifier
    name: batchName || generate(), // Human Readable Name like ElegantEel or HungryHamster
    description: "No detail provided", // Batch Specific Information in HTML.
    expiration: Date.now() + 6 * 30 * 24 * 60 * 60 * 1000, // Expiry of 6 months from now.

    // Default Settings
    settings: {
      ink: {
        dispenseHeight: 80, // microns
        dispensePressure: 500,
        dispenseThreshold: 0.1,
        reliefPressure: 50,
        reliefThreshold: 0,
        reliefOffset: 0.5,
        xySpeed: 500,
        zSpeed: 1000,
        passSpacing: 180, // microns
        minRaiseHeight: 1,
        preheatTemperature: 35,
        nozzleDiameter: 225, // microns.

        // Unused - Cannot be changed yet.
        trimLength: 1000,
      },
      substrate: {
        probePitch: 5, // In mm
        probeZSpeed: 100, // In mm/s
        minRaiseHeight: 1, // In mm
        maxTemperature: 200, // In celsius
        thickness: 1.6, // In mm
        vacuumRequired: 0,

        // Substrate placeholders
        color: 0,
        stretchable: 1, // Does it strecth? By how much?
        compression: 0, // Compression offset in mm - how squishy is it?
        camera: 1, // Some camera specific settings.
      },
    },
  };
}

function clamp(number: number, min: number, max: number) {
  return Math.max(min, Math.min(number, max));
}

export function clampInk(ink: Ink) {
  // Ink Settings
  ink.dispenseHeight = clamp(ink.dispenseHeight, 10, 1000);
  ink.dispensePressure = clamp(ink.dispensePressure, 0, 32000);
  ink.dispenseThreshold = clamp(ink.dispenseThreshold, 0, 2);
  ink.reliefPressure = clamp(ink.reliefPressure, -32000, 32000);
  ink.reliefThreshold = clamp(ink.reliefThreshold, 0, 2);
  ink.reliefOffset = clamp(ink.reliefOffset, 0, 5);
  ink.xySpeed = clamp(ink.xySpeed, 100, 2000);
  ink.zSpeed = clamp(ink.zSpeed, 100, 2000);
  ink.passSpacing = clamp(ink.passSpacing, 50, 2000);
  ink.minRaiseHeight = clamp(ink.minRaiseHeight, 0, 30);
  ink.preheatTemperature = clamp(ink.preheatTemperature, 20, 60);

  // Unused Ink Settings
  ink.nozzleDiameter = clamp(ink.nozzleDiameter, 10, 500);

  if (ink.dispensePressure < ink.reliefPressure) {
    ink.dispensePressure = ink.reliefPressure + 50;
  }
}

export function clampSubstrate(substrate: Substrate) {
  // Substrate Settings
  substrate.probePitch = clamp(substrate.probePitch, 1, 100);
  substrate.probeZSpeed = clamp(substrate.probeZSpeed, 50, 2000);
  substrate.vacuumRequired = clamp(substrate.vacuumRequired, 0, 1);
  substrate.minRaiseHeight = clamp(substrate.minRaiseHeight, 0, 30);

  // Unused
  substrate.thickness = clamp(substrate.thickness, 0, 30);
  substrate.camera = clamp(substrate.camera, 0, 10);
  substrate.color = clamp(substrate.color, 0, 10);
  substrate.compression = clamp(substrate.compression, 0, 5);
  substrate.maxTemperature = clamp(substrate.maxTemperature, 0, 1000);
  substrate.stretchable = clamp(substrate.stretchable, 0, 1);
}

export function clampSettings(settings: Settings) {
  clampInk(settings.ink);
  clampSubstrate(settings.substrate);
}
