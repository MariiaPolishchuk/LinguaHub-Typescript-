
// export interface Sentence {
//   id: string;
//   text: string;
//   correctWords: string[];
// }

// export interface WordsGame {
//   WordsGame: any;
//   sentences: Sentence[];
//   words: string[];
// }

// const GrammarMFM: WordsGame = {
//   sentences: [
//     {
//       id: "sentence1",
//       text: "Every morning, she (practise)  mindfulness, which (contribute)  to her overall well-being.",
//       correctWords: ["practises", "contributes"]
//     },
//     {
//       id: "sentence2",
//       text: "Right now, they (prepare)  a nutritious breakfast to start the day on a positive note.",
//       correctWords: ["prepare"]
//     },
//     {
//       id: "sentence3",
//       text: "By the time she (arrive)  at work, she (already/complete)  her morning planning.",
//       correctWords: ["arrives", "has already completed"]
//     },
//     {
//       id: "sentence4",
//       text: "She (feel)  a sense of accomplishment after completing her morning workout routine.",
//       correctWords: ["feels"]
//     },
//     {
//       id: "sentence5",
//       text: "At 7 AM, he (exercise)  in the park to stay fit and healthy.",
//       correctWords: ["exercises"]
//     },
//     {
//       id: "sentence6",
//       text: "The team (improve)  their productivity by implementing a new morning meeting routine.",
//       correctWords: ["improves"]
//     },
//     {
//       id: "sentence7",
//       text: "I (try)  to meditate every morning, but sometimes I find it challenging to focus.",
//       correctWords: ["am trying"]
//     },
//     {
//       id: "sentence8",
//       text: "She (face)  new challenges with optimism and determination every day.",
//       correctWords: ["faces"]
//     },
//     {
//       id: "sentence9",
//       text: "Why (you wait)  for me? Let's have breakfast together!",
//       correctWords: ["are you waiting"]
//     },
//     {
//       id: "sentence10",
//       text: "We (sip on)  our morning coffee while enjoying the beautiful sunrise.",
//       correctWords: ["are going to sip on"]
//     },

//     {
//       id: "sentence11",
//       text: "After breakfast, she (craft)  a detailed to-do list for the day ahead.",
//       correctWords: ["crafts"]
//     },
//     {
//       id: "sentence12",
//       text: "The aroma of fresh coffee (infuse)  the kitchen, creating a cozy morning atmosphere.",
//       correctWords: ["infuses"]
//     },
//     {
//       id: "sentence13",
//       text: "They (adopt)  a minimalist lifestyle and feel more content with less clutter.",
//       correctWords: ["have adopted"]
//     },
//     {
//       id: "sentence14",
//       text: "She (feel)  grateful for the simple joys of life, such as a warm cup of tea in the morning.",
//       correctWords: ["feels"]
//     },
//     {
//       id: "sentence15",
//       text: "For years, they (cultivate)  a beautiful garden, which brings them immense joy and satisfaction.",
//       correctWords: ["have cultivated"]
//     },
//   ],
//   words: [
//     "practises", "contributes", "prepare", "arrives", "has already completed",
//     "feels", "exercises", "improves", "am trying", "faces",
//     "are you waiting", "are going to sip on", "crafts", "infuses", "have adopted", "feels", "have cultivated"
//   ],
//   WordsGame: undefined
// };

// export default GrammarMFM;



export interface Sentence {
  id: string;
  text: string;
  correctWords: string[];
}

export interface WordsGame {
  sentences: Sentence[];
  words: string[];
}

const GrammarMFM: WordsGame = {
  sentences: [
    {
      id: "sentence1",
      text: "1. Every morning, she (practise)  mindfulness, which (contribute)  to her overall well-being.",
      correctWords: ["practises", "contributes"]
    },
    {
      id: "sentence2",
      text: "2. Right now, they (prepare)  a nutritious breakfast to start the day on a positive note.",
      correctWords: ["prepare"]
    },
    {
      id: "sentence3",
      text: "3. By the time she (arrive)  at work, she (already/complete)  her morning planning.",
      correctWords: ["arrives", "has already completed"]
    },
    {
      id: "sentence4",
      text: "4. Recently, he (incorporate)  new self-care practices into his morning routine, and he (feel)  more energized.",
      correctWords: ["incorporates", "feels"]
    },
    {
      id: "sentence5",
      text: "5. They (exercise)  for an hour every morning, and their physical health (improve)  significantly.",
      correctWords: ["exercise", "improves"]
    },
    {
      id: "sentence6",
      text: "6. I (try)  to establish a consistent morning routine, but I (face)  some challenges.",
      correctWords: ["am trying", "face"]
    },
    {
      id: "sentence7",
      text: "7. I (wait)  for you all morning! Where are you? (To be going/sip on)  this incredible moment without me?",
      correctWords: ["am waiting", "are going to sip on"]
    },
    {
      id: "sentence8",
      text: "8. Recently, I (craft)  a morning routine that (infuse)  my day with a sense of purpose.",
      correctWords: ["have crafted", "infuses"]
    },
    {
      id: "sentence9",
      text: "9. Recently, he (adopt)  a healthy lifestyle and (feel)  more invigorated.",
      correctWords: ["has adopted", "feels"]
    },
    {
      id: "sentence10",
      text: "10. For the past ten years they (cultivate)  a fulfilling and intentional life.",
      correctWords: ["have cultivated"]
    },
    {
      id: "sentence11",
      text: "11. She (shape)  their lives by adopting healthier habits over the months.",
      correctWords: ["shapes"]
    },
    {
      id: "sentence12",
      text: "12. She (not/read)  the newspaper yet because she (just/finish)  her morning meditation.",
      correctWords: ["has not read", "has just finished"]
    },
    {
      id: "sentence13",
      text: "13. I (think)  about my goals while (enjoy)  a quiet moment with a cup of tea.",
      correctWords: ["think", "enjoy"]
    },
    {
      id: "sentence14",
      text: "14. He (lie)  in bed, contemplating the fulfilling and intentional life he (try)  to foster.",
      correctWords: ["lies", "is trying"]
    },
    {
      id: "sentence15",
      text: "15. By the time she (get)  to work, she (already/unravel)  the layers of tasks that lie ahead.",
      correctWords: ["gets", "has already unraveled"]
    },
    {
      id: "sentence16",
      text: "16. How long (you actively cultivate)  a positive mindset?",
      correctWords: ["have you been actively cultivating"]
    },
    {
      id: "sentence17",
      text: "17. (You work)  on the project since last month?",
      correctWords: ["Have you been working"]
    },
    {
      id: "sentence18",
      text: "18. What aspects of your life (currently shape)  your future?",
      correctWords: ["is currently shaping"]
    },
    {
      id: "sentence19",
      text: "19. What specific areas of your interests (delve into)  these days?",
      correctWords: ["are delving into"]
    },
    {
      id: "sentence20",
      text: "20. (You ever experience)  something truly invigorating that (stay)  with you?",
      correctWords: ["Have you ever experienced", "has stayed"]
    }
  ],
  words: [
    "practises", "contributes", "prepares", "arrives", "has already completed", "incorporates",
    "feels", "exercises", "improves", "am trying", "face", "am waiting", "are going to sip on",
    "have crafted", "infuses", "adopts", "feels", "cultivate", "shapes", "has not read",
    "has just finished", "think", "enjoy", "lies", "is trying", "gets", "has already unraveled",
    "have been actively cultivating", "have you been working", "is currently shaping",
    "are delving into", "have you ever experienced", "has stayed"
  ]
};

export default GrammarMFM;
