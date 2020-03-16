const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// let result = tutorials.map(phrase => capitalizeFirstLetter(phrase.split(' ')).join(' '));

// function capitalizeFirstLetter(arr){
//   return arr.map(word => (word[0].toUpperCase() + word.slice(1, word.length)));
// }

const titleCased = (input) => {
  return tutorials.map( phrase => {
    let splitPhrase = phrase.split(' ');
    let capitalized =  splitPhrase.map(word => word[0].toUpperCase() + word.slice(1));
    let response = capitalized.join(' ');
    return response;
  });
};



// function capitalizeFirstLetter(arr){
//   return arr.map(word => (word[0].toUpperCase() + word.slice(1, word.length)));
// }

console.log(titleCased());
