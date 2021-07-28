import { Ink } from "@volterainc/utils-ink";
import _ from "lodash";

type InkSettingT = {
  min: number;
  max: number;
  defaultValue: number;
  precision: number;
};
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
export function Dehydrate(ink: Ink) {
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
  const header = {
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

  const newSettingsObj = { settings: Object.fromEntries(newSettingsMap) };
  Object.assign(newInk, header, newSettingsObj);
  console.log(newSettingsObj);
  return newInk;
}
