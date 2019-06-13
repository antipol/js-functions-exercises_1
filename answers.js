//1 XO
const checkXO = function(string) {
  const strLower = string.toLowerCase();
  const strSplit = strLower.split("");
  let countX = 0;
  let countO = 0;

  for (let i = 0; i <= strSplit.length; i++) {
    if (strSplit[i] === "x") {
      countX++
    } else if (strSplit[i] === "o") {
      countO++
    };
  };

  if (countX === 0 && countO === 0) {
    return "There are no Xs or Os in this string"
  } else if (countX === countO) {
    return "Same amount of Xs and Os"
  } else if (countX > countO) {
    return "More Xs than Os"
  } else {
    return "More Os than Xs"
  };
};
console.log(checkXO("Hello")); //more xs than os



//2. Pie
const pie = (total, people, slices) => total >= people * slices;
console.log(pie(11, 5, 3)); //false



//3. Cubed
const sumOfCubes = function(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    let cube = numArray[i] ** 3;
    sum += cube;
  }
  return sum;
}
console.log(sumOfCubes([1, 2, 3])); //36


// 4. Amplify
const amplify = function(num) {
  let ampArray = [];
  console.log(num); //4
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      let ampByTen = i * 10;
      ampArray.push(ampByTen);
    } else {
      ampArray.push(i);
    };
  };
  return ampArray;
};
console.log(amplify(4)); // 1, 2, 3, 40


//5. Months
const monthName = function(monthNumber) {
  const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (monthNumber < 1 || monthNumber > 12) {
    return "This is not a month!";
  } else {
    return months[monthNumber - 1];
  }
}
console.log(monthName(12)); //December


//6. Even Number Generator
const evenNums = (testNum) => {
  let evenResult = [];

  for (let i = 1; i <= testNum; i++) {
    i % 2 === 0 ? evenResult.push(i) : [];
  }

  return evenResult;
}
console.log(evenNums(7)); //2, 4, 6


//7. Dictionary
const dictionary = (searchWord, wordArray) => {
  const wordLower = searchWord.toLowerCase();
  let filterArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    let arrayLower = wordArray[i].toLowerCase();
    if (arrayLower.includes(wordLower)) {
      filterArray.push(arrayLower);
    }
  }
  return filterArray;
}
console.log(dictionary("tri", ["tripod", "treaty", "trick", "triad", "teeny", "talk"])); //tripod, trick, triad


//8. Is a four letter word
const isFourLetters = (stringArray) => {
  let resultArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i].length === 4 ? resultArray.push(stringArray[i]) : [];
  }
  return resultArray;
}
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"])); //Corn


//9. Is it Symmetrical?
const isSymmetrical = (number) => {
  const numToString = number.toString();
  const strToArray = numToString.split("");
  const reverseArr = strToArray.reverse();
  const joinArr = reverseArr.join("");

  return numToString === joinArr;
}
console.log(isSymmetrical(5775)); //true
