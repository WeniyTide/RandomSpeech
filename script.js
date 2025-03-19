const randomWordArray = [
  'flexible',
  'optimistic',
  'kind',
  'honest',
  'responsible',
  'patient',
  'goal - oriented',
  'communicative',
  'self - disciplined',
  'creative',
  'empathetic',
  'generous',
  'fair',
  'decisive',
  'open - minded',
  'reliable',
  'sincere',
  'respectful',
  'courageous',
  'grateful',
];

const randomMotivateSpeech = [
  'Begin now, perfect later.',
  'Your potential outweighs your fear.',
  'Embrace the challenge, own the victory.',
  'Every step forward, no matter how small, is progress.',
  "Believe in the power of 'yet'.",
  'Your dedication defines your destination.',
  "Turn your 'what ifs' into 'what is'.",
  'Rise above the noise, amplify your purpose.',
  'The future belongs to those who act today.',
  'Your resilience is your superpower.',
];
const min = 0;
const randomWord =
  randomWordArray[
    Math.floor(Math.random() * (randomWordArray.length - 1 - min + 1) + min)
  ];
// console.log(randomWord);
const randomSpeach =
  randomMotivateSpeech[
    Math.floor(
      Math.random() * (randomMotivateSpeech.length - 1 - min + 1) + min
    )
  ];
// console.log(randomSpeach);
const advice =
  randomWordArray[
    Math.floor(Math.random() * (randomWordArray.length - 1 - min + 1) + min)
  ];
console.log(`You're ${randomWord}!`);
console.log(`You need to be more ${advice}`);
console.log(randomSpeach);
