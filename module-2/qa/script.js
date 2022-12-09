// 1. Напишіть функцію moveToTheEnd, яка приймає масив будь-яких елементів і елемент, 
// який повинен спливти в кінець масиву.

function moveToTheEnd(array, smth) {
  const arrNoInclude = [];
  const arrInclude = [];
  for( let i = 0; i < array.length; i += 1) {
    // if ( smth === array[i]) {
    //   arrInclude.push(array[i]);
    //   continue;
    // }
    // arrNoInclude.push(array[i]);

    // const arrToPush = smth===array[i] ? arrInclude : arrNoInclude;
    // arrToPush.push(array[i]);

    (smth===array[i] ? arrInclude : arrNoInclude).push(array[i]);

  }
//   return arrNoInclude.concat(arrInclude);
  return [...arrNoInclude, ...arrInclude]; 
}

// console.log(moveToTheEnd([1, 2, 0, 1, 0, 4], 0)); //  [1,2,1,4,0,0]
// console.log(moveToTheEnd([8, false, 0, "yay", null], false)); // [8, 0, "yay", null, false]
// console.log(moveToTheEnd(['hello', 'JS', 'study', 'programming', 'JS', 'Python'], 'JS'))


//-------------------

// 2. Напишіть функцію spinWords, яка приймає рядок, 
// що складається зі слів і розгортає слова в яких більше 4 символів.


// const reverseStr = function(strToReverse){
//   return strToReverse.split('').reverse().join('')
// }

// function spinWords(strToSpin) {
//   const wordsArr = strToSpin.split(' ');
//   const spinnedArray = [];

  // for(let i = 0; i < wordsArr.length; i+=1){
  // if(wordsArr[i].length > 4){
  //   spinnedArray.push(wordsArr[i].split('').reverse().join(''))
  // } else  {
  //   spinnedArray.push(wordsArr[i])
  // }
//   }

//     for (const word of wordsArr){
    
//         spinnedArray.push(word.length > 4 ? reverseStr(word) : (word))

//     }
//   return spinnedArray.join(' ')
// }

// console.log(spinWords("Welcome")); // emocleW
// console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
// console.log(spinWords("This is a test")); // This is a test
// console.log(spinWords("This is another test")); // This is rehtona test


//-------------------

// 3. Напишіть функцію addLeadingZero, 
// яка приймає масив чисел і додає провідний нуль туди, де потрібно.

// function addLeadingZero(arr) {
//   const resultArr = [];

//   for (const element of arr) {
//         // if (element >= 1 && element <= 9) {
//         //    resultArr.push(`0${element}`)      
//         // }else{
//         //     resultArr.push(String(element))
//         // }
//         resultArr.push(element >= 1 && element <= 9 ? `0${element}` : String(element))
        
//     }

//     return resultArr;
// }


// console.log(addLeadingZero([1, 2, 10, 11])); // ['01', '02', '10', '11']
// console.log(addLeadingZero([-1, -2, 0, 4])); // ['-1', '-2', '0', '04']


//------------------

// 4. Напишіть функцію lowercaseCount, 
// яка приймає рядок і повертає кількість букв у нижньому регістрі.

function lowercaseCount(string) {
  let countStr = 0;
  for (let i = 0; i<string.length; i+=1 ) {
    if (string[i].toLowerCase() === string[i].toUpperCase()) {
      continue;
    }
    if (string[i] === string[i].toLowerCase()) {
      countStr += 1;
    }

  }
  return countStr;
}



// console.log(lowercaseCount("abc"));
// console.log(lowercaseCount("abcABC123"));
// console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
// console.log(lowercaseCount(""));
// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
// console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));
// asci table

//-------------------

// function isNeedToGo(num, maxNum) {
//   return num < maxNum || num > maxNum
// }

// 5. Напишіть функцію range, аналог range із Python.

// function range(start, end, step = 1){

//   const resultArray = [];

//   for(let i = start; i < end || i > end; i += step){

//     resultArray.push(i)
//   }

//   // for(let i = start; isNeedToGo(i, end); i += step){

//   //   resultArray.push(i)
//   // }

//   return resultArray;

// }


// console.log(range(0, 6)); // [0, 1, 2, 3, 4, 5]
// console.log(range(6, 0, -1)); // [6, 5, 4, 3, 2, 1]
// for (const n of range(0, 0.5, 0.1)) {
//     console.log(Number(n.toFixed(1))); // 0 0.1 0.2 0.3 0.4
// }

//---------------------