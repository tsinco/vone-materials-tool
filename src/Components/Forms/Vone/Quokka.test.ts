export const ConductiveInkTypes = {
  ConductiveInk: "Conductive Ink",
  FlexibleConductiveInk: "Flexible Conductive Ink",
  ExperimentalInk: "Experimental Ink",
  CustomInk: "Custom Ink",
};

export const SolderPasteTypes = {
  SolderPaste: "Solder Paste",
  Sn63SolderPaste: "Sn63 Solder Paste",
  CustomPaste: "Custom Paste",
};

type InkType =
  | typeof ConductiveInkTypes[keyof typeof ConductiveInkTypes]
  | typeof SolderPasteTypes[keyof typeof SolderPasteTypes];

type LabelT = {
  color: string;
  type?: string;
};

type InkSettingT = {
  min: number;
  max: number;
  defaultValue: number;
  precision: number;
};
export type InkSetting = InkSettingT & {
  value: number;
};
type InkSettingWithOptionalValue = InkSettingT & {
  value?: number;
};

type SettingsMapT = { [key: string]: InkSetting };
type SettingsMapWithOptionValues = {
  [key: string]: InkSettingWithOptionalValue;
};

type InkSettingsT = { [key: string]: SettingsMapT };
type InkSettingsWithOptionalValues = {
  [key: string]: SettingsMapWithOptionValues;
};

type HeatingProfileStepT = {
  temperature: number;
  duration: number;
};

type HeatingProfileT = HeatingProfileStepT[];

type PropsT = {
  useBy: string;
  label?: LabelT;
};

type CloneArgsT = {
  name?: string;
  description?: string;
  props?: PropsT;
  settings?: InkSettingsWithOptionalValues;
  organization?: string;
};

type ConstructorArgsT = {
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

import { settings } from "cluster";
import _ from "lodash";
import { array } from "yargs";

export function alterSetting(
  setting: InkSettingWithOptionalValue,
  value?: number
): InkSetting {
  const { min, max, defaultValue, precision } = setting;
  const newValue = _.clamp(_.defaultTo(value, defaultValue), min, max);
  return {
    min,
    max,
    precision,
    defaultValue: _.round(defaultValue, precision),
    value: _.round(newValue, precision),
  };
}

type SettingMapFn<T> = (setting: InkSettingWithOptionalValue) => T;

function mapSettingsMap<T>(
  settingsMap: SettingsMapWithOptionValues,
  fn: SettingMapFn<T>
): { [key: string]: T } {
  return _.mapValues(settingsMap, (setting: InkSettingWithOptionalValue) =>
    fn(setting)
  );
}

function mapInkSettings<T>(
  inkSettings: InkSettingsWithOptionalValues,
  fn: SettingMapFn<T>
): { [x: string]: { [key: string]: T } } {
  return _.mapValues(inkSettings, (settingsMap: SettingsMapWithOptionValues) =>
    mapSettingsMap(settingsMap, fn)
  );
}

export class Ink {
  id: string;
  type: InkType;
  name: string;
  organization: string;
  useBy: string;
  storage: string;
  material?: string;
  description: string;
  label: LabelT;
  settings: InkSettingsT;
  heatingProfile: HeatingProfileT;
  isOverridingSettings: boolean;

  constructor(props: ConstructorArgsT) {
    const {
      type,
      name,
      organization,
      useBy,
      storage,
      material,
      description,
      label,
      settings,
      heatingProfile,
    } = props;

    if (
      _.isNil(type) ||
      _.isNil(name) ||
      _.isNil(organization) ||
      _.isNil(useBy) ||
      _.isNil(storage) ||
      _.isNil(description) ||
      _.isNil(label) ||
      _.isNil(settings) ||
      _.isNil(heatingProfile)
    ) {
      const msg = "Unable to create ink, some properties are missing";
      console.error(msg, props);
      throw new Error(msg);
    }

    let isOverridingSettings = false;
    const processedSettings = mapInkSettings(
      settings,
      (setting: InkSettingWithOptionalValue): InkSetting => {
        // Use alter to ensure setting's value is valid
        const clampedSetting = alterSetting(setting, setting.value);

        // Determine if any non-defaults are being used
        if (clampedSetting.defaultValue !== clampedSetting.value) {
          isOverridingSettings = true;
        }

        return clampedSetting;
      }
    );

    this.id = `${organization}/${name}`;
    this.type = type;
    this.name = name;
    this.organization = organization;
    this.useBy = useBy;
    this.storage = storage;
    this.material = material;
    this.description = description;
    this.label = label || { color: "grey" };
    this.heatingProfile = heatingProfile;
    this.settings = processedSettings;
    this.isOverridingSettings = isOverridingSettings;
  }

  get isConductiveInk(): boolean {
    return _.values(ConductiveInkTypes).includes(this.type);
  }

  get isSolderPaste(): boolean {
    return _.values(SolderPasteTypes).includes(this.type);
  }

  get isExperimental(): boolean {
    return this.type === "Experimental Ink";
  }

  get materialName(): string {
    if (this.isExperimental) {
      const materialCode = this.name.split("-")[0].slice(1);
      const reversedCode = materialCode.split("").reverse().join("");
      return `EXP${reversedCode}`;
    }

    return this.material || "";
  }

  clone(overrides: CloneArgsT = {}): Ink {
    const newInk = new Ink(_.merge(_.cloneDeep(this), overrides));
    return newInk;
  }
}

export function alterInk(ink: Ink, path: string, value: number) {
  return ink.clone(_.set({}, path, value));
}
//TEST SECTION
const InkTest = {
  id: "Voltera/AdorableAnchovy",
  type: "Flexible Conductive Ink",
  name: "AdorableAnchovy",
  organization: "Voltera",
  useBy: "2021-12-14",
  storage: "4°C – 10°C",
  material: "Flex 2",
  description:
    "\n   Flexible conductive ink for Kapton (polyimide), polycarbonate and PET.\n   Solder joints will be brittle, use adhesive or epoxy to secure components.\n ",
  label: { type: "FLEX CONDUCTOR", color: "#c10000" },
  heatingProfile: [
    { temperature: 160, duration: 1800 },
    { temperature: 60, duration: 1 },
  ],
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
  isOverridingSettings: false,
};

//save OptionalValues as defaultValue and delete value while maintaining precision
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

Hydrate(Dehydrate(new Ink(InkTest)));
