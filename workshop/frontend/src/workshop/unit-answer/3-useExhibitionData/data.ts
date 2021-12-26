const WhatIsHope = [
  {
    type: "text",
    data: {
      quote: "What is Hope?",
    },
  },
  {
    type: "textArea",
    data: {
      question: "สำหรับคุณแล้ว ความหวังคืออะไร ?",
    },
  },
];

const HopeIgnited = [
  {
    type: "text",
    data: {
      quote: "Hope ignited",
    },
  },
  {
    type: "multipleChoice",
    data: {
      question: "เมื่อพูดถึงกฎหมายไทย คุณรู้สึกอย่างไร ?",
      choiceList: ["มีความหวัง", "สิ้นหวัง"],
    },
  },
];

const HopelessButHoping = [
  {
    type: "text",
    data: {
      quote: "Hopeless but Hoping",
    },
  },
  {
    type: "textArea",
    data: {
      question: "คุณหวังว่าจะเห็นประเทศไทยเป็นอย่างไร ?",
    },
  },
];

export const ExhibitionData = {
  "what-is-hope": {
    data: WhatIsHope,
    title: "What is Hope?",
    quote: "Where there is hope,\n there is life",
    quoteOwner: "Anne frank",
  },
  "hope-ignited": {
    data: HopeIgnited,
    title: "Hope Ignited",
    quote: "If justice takes place,\n there shall be hope.",
    quoteOwner: "Alberto Manguel",
  },
  "hopeless-but-hoping": {
    data: HopelessButHoping,
    title: "Hopeless but Hoping",
    quote: "Once you choose hope,\n anything is possible.",
    quoteOwner: "Christopher reeve",
  },
};
