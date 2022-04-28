const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(sentence => sentence.split(' ')).map(sentence => sentence.map(word => word = word[0].toUpperCase() + word.slice(1))).map(sentence => sentence.join(' '))
 // for (let i = 0; i < newTutorials.length; i++) {
 //   tutorials[i] = newTutorials[i]
 // }
  return newTutorials
}
//const newTutorials = tutorials.map(title => title.split(' '))
//const stuff = newTutorials.map(sentence => sentence.map(word => word = word[0].toUpperCase() + word.slice(1)))
//const possibleSolution = stuff.map(sentence => sentence.join(' '))
//for (let i = 0; i < possibleSolution.length; i++) {
//  tutorials[i] = possibleSolution[i]
//}