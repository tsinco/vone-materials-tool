import { Ink } from "@volterainc/utils-ink";
import _ from "lodash";

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
type Body = {
  settings: {
    probing: { [key: string]: InkSettingT };
    dispensing: { [key: string]: InkSettingT };
  };
};
// make value -> defaultValue
export function formatSetting(setting: any): InkSettingT {
  const { min, max, defaultValue, precision, value } = setting;
  const newValue = _.clamp(_.defaultTo(value, defaultValue), min, max);
  return {
    min,
    max,
    precision,
    defaultValue: _.round(newValue, precision),
  };
}
export function Dehydrate(ink: Ink): ConstructorArgsT & { id: string } {
  return {
    id: ink.id,
    name: ink.name,
    type: ink.type,
    organization: ink.organization,
    useBy: ink.useBy,
    storage: ink.storage,
    material: ink.material,
    description: ink.description,
    label: ink.label,
    heatingProfile: ink.heatingProfile,
    settings: ink.settings,
  };
}

export function Hydrate(props: any) {
  let newInk = {};
  const {
    id,
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
  } = props;
  const header: Header = {
    id,
    name,
    type,
    organization,
    useBy,
    storage,
    material,
    description,
    label,
    heatingProfile,
  };
  const newSettingsMap = new Map();
  const probeMap = new Map();
  const dispenseMap = new Map();
  const probe = Object.entries(settings.probing);
  const dispense = Object.entries(settings.dispensing);
  if (
    null === id ||
    null === name ||
    null === organization ||
    null === useBy ||
    null === storage ||
    null === material ||
    null === description ||
    null === label ||
    null === heatingProfile ||
    null === settings
  ) {
    const msg = "Unable to create new Ink, some properties are missing";
    console.error(msg, props);
    throw new Error(msg);
  } else {
    for (const [key, value] of probe) {
      probeMap.set(key, formatSetting(value));
    }
    for (const [key, value] of dispense) {
      dispenseMap.set(key, formatSetting(value));
    }
  }
  newSettingsMap.set("probing", Object.fromEntries(probeMap));
  newSettingsMap.set("dispensing", Object.fromEntries(dispenseMap));

  const body: Body = { settings: Object.fromEntries(newSettingsMap) };
  Object.assign(newInk, header, body);
  return newInk;
}
