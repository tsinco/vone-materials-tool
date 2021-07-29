import type { Ink } from "@volterainc/utils-ink";

import { ConductiveInkTypes, SolderPasteTypes } from "@volterainc/utils-ink";

import { isNil, groupBy, sortBy } from "lodash";
const newArr = [
  {
    id: "Voltera/AdorableAnchovy",
    type: "Flexible Conductive Ink",
    name: "AdorableAnchovy",
    organization: "Voltera",
    useBy: "2021-12-14",
    storage: "4°C – 10°C",
    material: "Flex 2",
    description:
      "\n   Flexible conductive ink for Kapton (polyimide), polycarbonate and PET.\n   Solder joints will be brittle, use adhesive or epoxy to secure components.\n ",
    label: {
      type: "FLEX CONDUCTOR",
      color: "#c10000",
    },
    heatingProfile: [
      {
        temperature: 160,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 50,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.1,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 0.1,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.35,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.1,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.16,
        },
      },
    },
  },
  {
    id: "Voltera/AqueousSnake",
    type: "Conductive Ink",
    name: "AqueousSnake",
    organization: "Voltera",
    useBy: "2018-10-28",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 210,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 45,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 2,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.05,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.05,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.2,
        },
      },
    },
  },
  {
    id: "Voltera/CaptivatingChimera",
    type: "Conductive Ink",
    name: "CaptivatingChimera",
    organization: "Voltera",
    useBy: "2019-12-15",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 210,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 50,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 0.1,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.1,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.25,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
      },
    },
  },
  {
    id: "Voltera/ChivalrousCaribou",
    type: "Flexible Conductive Ink",
    name: "ChivalrousCaribou",
    organization: "Voltera",
    useBy: "2018-08-20",
    storage: "4°C – 10°C",
    description:
      "\n    Flexible conductive ink for Kapton (polyimide), polycarbonate and PET.\n    Solder joints will be brittle, use adhesive or epoxy to secure components.\n  ",
    label: {
      type: "FLEX CONDUCTOR",
      color: "#c10000",
    },
    heatingProfile: [
      {
        temperature: 160,
        duration: 900,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 45,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 2,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.4,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.4,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
      },
    },
  },
  {
    id: "Voltera/CrypticKappa",
    type: "Conductive Ink",
    name: "CrypticKappa",
    organization: "Voltera",
    useBy: "2019-06-04",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 210,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 50,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 0.1,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.1,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.25,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
      },
    },
  },
  {
    id: "Voltera/DaintyGodwit",
    type: "Conductive Ink",
    name: "DaintyGodwit",
    organization: "Voltera",
    useBy: "2019-02-23",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 240,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 45,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 400,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 2,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.05,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.05,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.2,
        },
      },
    },
  },
  {
    id: "Voltera/DazzlingDragon",
    type: "Conductive Ink",
    name: "DazzlingDragon",
    organization: "Voltera",
    useBy: "2019-06-01",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 210,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 50,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 0.1,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.1,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.25,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
      },
    },
  },
  {
    id: "Voltera/DecisiveHamster",
    type: "Conductive Ink",
    name: "DecisiveHamster",
    organization: "Voltera",
    useBy: "2018-03-17",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 210,
        duration: 1620,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 50,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 300,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 2,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.3,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.05,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.05,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.16,
        },
      },
    },
  },
  {
    id: "Voltera/DeliciousBass",
    type: "Flexible Conductive Ink",
    name: "DeliciousBass",
    organization: "Voltera",
    useBy: "2018-08-08",
    storage: "4°C – 10°C",
    description:
      "\n    Flexible conductive ink for Kapton (polyimide), polycarbonate and PET.\n    Solder joints will be brittle, use adhesive or epoxy to secure components.\n  ",
    label: {
      type: "FLEX CONDUCTOR",
      color: "#c10000",
    },
    heatingProfile: [
      {
        temperature: 160,
        duration: 900,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 45,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 2,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.4,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.4,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
      },
    },
  },
  {
    id: "Voltera/DramaticDryad",
    type: "Conductive Ink",
    name: "DramaticDryad",
    organization: "Voltera",
    useBy: "2020-01-27",
    storage: "4°C – 10°C",
    description:
      "\n   Conductive silver ink for printing PCB traces and pads.\n   When soldering to this ink, use flux and the supplied Voltera solder.\n   Other solder alloys may cause silver scavenging.\n  ",
    label: {
      type: "CONDUCTOR",
      color: "#79ce00",
    },
    heatingProfile: [
      {
        temperature: 210,
        duration: 1800,
      },
      {
        temperature: 60,
        duration: 1,
      },
    ],
    settings: {
      probing: {
        probePitch: {
          min: 0.1,
          max: 10,
          precision: 1,
          defaultValue: 5,
        },
      },
      dispensing: {
        trimLength: {
          min: 1,
          max: 9999,
          precision: 0,
          defaultValue: 50,
        },
        tracePadPenetration: {
          min: -5,
          max: 5,
          precision: 2,
          defaultValue: 0.15,
        },
        dispenseHeight: {
          min: 0.01,
          max: 1,
          precision: 2,
          defaultValue: 0.08,
        },
        feedrate: {
          min: 0,
          max: 600,
          precision: 0,
          defaultValue: 500,
        },
        passSpacing: {
          min: 0.1,
          max: 1,
          precision: 2,
          defaultValue: 0.15,
        },
        antiString: {
          min: 0.1,
          max: 5,
          precision: 1,
          defaultValue: 0.1,
        },
        kick: {
          min: 0.05,
          max: 2,
          precision: 2,
          defaultValue: 0.4,
        },
        softStart: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.1,
        },
        softStop: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.25,
        },
        rheologicalSetpoint: {
          min: 0,
          max: 1,
          precision: 2,
          defaultValue: 0.18,
        },
      },
    },
  },
];
const defaultValue = {
  type: "",
  name: "",
  organization: "",
  useBy: "",
  storage: "",
  material: "",
  description: "",
  label: {
    type: "",
    color: "",
  },
  heatingProfile: [
    {
      temperature: 160,
      duration: 1800,
    },
    {
      temperature: 60,
      duration: 1,
    },
  ],
  settings: {
    probing: {
      probePitch: {
        min: 0.1,
        max: 10,
        precision: 1,
        defaultValue: 5,
      },
    },
    dispensing: {
      trimLength: {
        min: 1,
        max: 9999,
        precision: 0,
        defaultValue: 50,
      },
      tracePadPenetration: {
        min: -5,
        max: 5,
        precision: 2,
        defaultValue: 0.15,
      },
      dispenseHeight: {
        min: 0.01,
        max: 1,
        precision: 2,
        defaultValue: 0.1,
      },
      feedrate: {
        min: 0,
        max: 600,
        precision: 0,
        defaultValue: 500,
      },
      passSpacing: {
        min: 0.1,
        max: 1,
        precision: 2,
        defaultValue: 0.15,
      },
      antiString: {
        min: 0.1,
        max: 5,
        precision: 1,
        defaultValue: 0.1,
      },
      kick: {
        min: 0.05,
        max: 2,
        precision: 2,
        defaultValue: 0.35,
      },
      softStart: {
        min: 0,
        max: 1,
        precision: 2,
        defaultValue: 0.1,
      },
      softStop: {
        min: 0,
        max: 1,
        precision: 2,
        defaultValue: 0.15,
      },
      rheologicalSetpoint: {
        min: 0,
        max: 1,
        precision: 2,
        defaultValue: 0.16,
      },
    },
  },
};
const StandardOrdering = [
  ConductiveInkTypes.ConductiveInk,
  ConductiveInkTypes.FlexibleConductiveInk,
  ConductiveInkTypes.ExperimentalInk,
  ConductiveInkTypes.CustomInk,

  SolderPasteTypes.SolderPaste,
  SolderPasteTypes.Sn63SolderPaste,
  SolderPasteTypes.CustomPaste,
];

export function standardOrder(inks: Ink[]): Ink[][] {
  const sortedInks: Ink[][] = [];
  const groups = groupBy(inks, "type");
  StandardOrdering.forEach((type) => {
    const inksInGroup = groups[type];
    if (!isNil(inksInGroup)) {
      sortedInks.push(sortBy(inksInGroup, "useBy").reverse());
    }
  });
  return sortedInks;
}
// console.log(standardOrder(new Ink(newArr)));
