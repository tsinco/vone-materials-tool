const AdorableAnchovy = {
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
};
export default AdorableAnchovy;
