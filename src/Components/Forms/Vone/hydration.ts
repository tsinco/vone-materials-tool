import { Ink } from "@volterainc/utils-ink";

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

type Settings = {
  settings: {
    probing: { [key: string]: InkSettingsT };
    dispensing: { [key: string]: InkSettingsT };
  };
};
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
  settings: Settings;
};
export function setDefaultToValue(setting: InkSetting): InkSettingT {
  const { min, max, defaultValue, precision, value } = setting;
  return {
    min,
    max,
    precision,
    defaultValue: value,
  };
}
function setSettings(settings: InkSettingsT): Settings {
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
  return Object.fromEntries(newSettingMap);
}

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
