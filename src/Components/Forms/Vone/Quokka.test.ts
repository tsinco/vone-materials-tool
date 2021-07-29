import { Ink } from "@volterainc/utils-ink";
import _, { values } from "lodash";

export declare const ConductiveInkTypes: {
  ConductiveInk: string;
  FlexibleConductiveInk: string;
  ExperimentalInk: string;
  CustomInk: string;
};
export declare const SolderPasteTypes: {
  SolderPaste: string;
  Sn63SolderPaste: string;
  CustomPaste: string;
};
type InkSettingT = {
  min: number;
  max: number;
  defaultValue: number;
  precision: number;
};
type InkType =
  | typeof ConductiveInkTypes[keyof typeof ConductiveInkTypes]
  | typeof SolderPasteTypes[keyof typeof SolderPasteTypes];
type LabelT = {
  color: string;
  type?: string;
};
declare type HeatingProfileStepT = {
  temperature: number;
  duration: number;
};
declare type HeatingProfileT = HeatingProfileStepT[];
declare type InkSettingWithOptionalValue = InkSettingT & {
  value?: number;
};
declare type SettingsMapWithOptionValues = {
  [key: string]: InkSettingWithOptionalValue;
};
type InkSettingsWithOptionalValues = {
  [key: string]: SettingsMapWithOptionValues;
};
declare type ConstructorArgsT = {
  type: InkType;
  name: string;
  organization: string;
  useBy: string;
  storage: string;
  material?: string;
  description: string;
  label: LabelT;
  settings: InkSettingsWithOptionalValues;
  heatingProfile: HeatingProfileT;
};
export declare type InkSetting = InkSettingT & {
  value: number;
};
declare type SettingsMapT = {
  [key: string]: InkSetting;
};
declare type InkSettingsT = {
  [key: string]: SettingsMapT;
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type Header = {
  id: string;
  name: string;
  type: InkType;
  organization: string;
  useBy: string;
  storage: string;
  material?: string;
  description: string;
  label: LabelT;
  heatingProfile: HeatingProfileT;
};
type Settings = {
  settings: {
    probing: { [key: string]: InkSettingsT };
    dispensing: { [key: string]: InkSettingsT };
  };
};
const settingsTest = {
  settings: {
    probing: {
      probePitch: {
        min: 0.1,
        max: 10,
        precision: 1,
        defaultValue: 5,
        value: 5,
      },
    },
    dispensing: {
      trimLength: {
        min: 1,
        max: 9999,
        precision: 0,
        defaultValue: 50,
        value: 50,
      },
      tracePadPenetration: {
        min: -5,
        max: 5,
        precision: 2,
        defaultValue: 0.15,
        value: 0.15,
      },
      dispenseHeight: {
        min: 0.01,
        max: 1,
        precision: 2,
        defaultValue: 0.1,
        value: 0.1,
      },
      feedrate: {
        min: 0,
        max: 600,
        precision: 0,
        defaultValue: 500,
        value: 500,
      },
      passSpacing: {
        min: 0.1,
        max: 1,
        precision: 2,
        defaultValue: 0.15,
        value: 0.15,
      },
      antiString: {
        min: 0.1,
        max: 5,
        precision: 1,
        defaultValue: 0.1,
        value: 0.1,
      },
      kick: {
        min: 0.05,
        max: 2,
        precision: 2,
        defaultValue: 0.35,
        value: 0.35,
      },
      softStart: {
        min: 0,
        max: 1,
        precision: 2,
        defaultValue: 0.1,
        value: 0.1,
      },
      softStop: {
        min: 0,
        max: 1,
        precision: 2,
        defaultValue: 0.15,
        value: 0.15,
      },
      rheologicalSetpoint: {
        min: 0,
        max: 1,
        precision: 2,
        defaultValue: 0.16,
        value: 0.16,
      },
    },
  },
};
// make value -> defaultValue
export function setDefaultToValue(setting: InkSetting): InkSettingT {
  const { min, max, defaultValue, precision, value } = setting;
  return {
    min,
    max,
    precision,
    defaultValue: value,
  };
}
function setSettings(settings: InkSettingsT) {
  const newSettingMap = new Map();
  const newSettingObj = Object.entries(settings);

  for (const [key, value] of newSettingObj) {
    if (value && typeof Object) {
      const nestedMap = new Map();
      const nestedObj = Object.entries(value);
      for (const [key, value] of nestedObj) {
        nestedMap.set(key, setDefaultToValue(value));
      }
      newSettingMap.set(key, Object.fromEntries(nestedMap));
    } else {
    }
  }
  console.log(Object.fromEntries(newSettingMap));

  return Object.fromEntries(newSettingMap);
}
type InkDefinition = {
  name: string;
  type: InkType;
  organization: string;
  useBy: string;
  storage: string;
  material?: string;
  description: string;
  label: LabelT;
  heatingProfile: HeatingProfileT;
  settings: InkSettingsT;
};

export function createInkDefinition({
  name,
  type,
  organization,
  useBy,
  storage,
  material,
  description,
  label,
  heatingProfile,
  settings,
}: Ink): InkDefinition {
  return {
    name,
    type,
    organization,
    useBy,
    storage,
    material,
    description,
    label,
    heatingProfile,
    settings: setSettings(settings),
  };
}
//return inksetting type (no value)

setSettings(settingsTest.settings);
// export function Hydrate(props: ConstructorArgsT & { id: string }) {
//   let newInk = {};
//   const {
//     id,
//     name,
//     type,
//     organization,
//     useBy,
//     storage,
//     material,
//     description,
//     label,
//     heatingProfile,
//     settings,
//   } = props;
//   const header: Header = {
//     id,
//     name,
//     type,
//     organization,
//     useBy,
//     storage,
//     material,
//     description,
//     label,
//     heatingProfile,
//   };
//   const newSettingsMap = new Map();
//   const probeMap = new Map();
//   const dispenseMap = new Map();
//   const probe = Object.entries(settings.probing);
//   const dispense = Object.entries(settings.dispensing);
//   if (
//     null === id ||
//     null === name ||
//     null === organization ||
//     null === useBy ||
//     null === storage ||
//     null === material ||
//     null === description ||
//     null === label ||
//     null === heatingProfile ||
//     null === settings
//   ) {
//     const msg = "Unable to create new Ink, some properties are missing";
//     console.error(msg, props);
//     throw new Error(msg);
//   } else {
//     for (const [key, value] of probe) {
//       probeMap.set(key, formatSetting(value));
//     }
//     for (const [key, value] of dispense) {
//       dispenseMap.set(key, formatSetting(value));
//     }
//   }
//   newSettingsMap.set("probing", Object.fromEntries(probeMap));
//   newSettingsMap.set("dispensing", Object.fromEntries(dispenseMap));

//   const newSettings: Settings = {
//     settings: Object.fromEntries(newSettingsMap),
//   };

//   Object.assign(newInk, header, newSettings);
//   return newInk;
// }
