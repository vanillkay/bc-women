// const testString = ['asdf', 'fdas' ,'asds', 'd fm', 'dfaa', 'aaaa', 'aabb', 'aaabb'];

//V1
// function findMatches(array) {
//     const finalArr = [];
//     array.forEach(el => {
//         const lettersCount = {};
//      for (const letter of el) {
//          lettersCount[letter] = (lettersCount[letter] || 0) + 1;
            //ключ                      значення
//         }
//         // console.log(lettersCount);
//         const isTwiceLetters = Object.values(lettersCount).some(el => el === 2);
//         if (isTwiceLetters) {
//             finalArr.push(el);
//         }
//         // console.log(isTwiceLetters);
//     })
//     return finalArr;
// }
// console.log(findMatches(testString));
//V2
// function findMatches(array) {
//     return array.filter(el => {
//         const lettersCount = {};
//         for (const letter of el) {
//             lettersCount[letter] = (lettersCount[letter] || 0) + 1;
//         }
//         // console.log(lettersCount);
//         return Object.values(lettersCount).some(el => el === 2);
//     });
// }
// console.log(findMatches(testString));


// V3
// function findMatches(array) {
//     return array.filter(el => {
//         const lettersCount = new Map();
//         for (const letter of el) {
//             lettersCount.set(letter, (lettersCount.get(letter) || 0) + 1)
//         }
//         return [...lettersCount.values()].some(el => el === 2);
//     });
// }
// console.log(findMatches(testString));


// dupl([1,2,3]); returns [1,2,3,1,2,3]


// function dupl(arr) {
//     if(Array.isArray(this)){
//         return [...this, ...this];
//     }

//     if(Array.isArray(arr)){
//         return [...arr, ...arr];
//     }

//     return [];
// }


// function dupl(arr) {

//     const arrToDupl = Array.isArray(this) ? this : (Array.isArray(arr) ? arr : []);

//     return [...arrToDupl, ...arrToDupl]
// }

// function dupl(arr) {

//     const cases = new Map([
//         [true, []], // default case 
//         [Array.isArray(arr), arr], // param case
//         [Array.isArray(this), this],// proto case
//     ])

//     const arrToDupl = cases.get(true);

//     return [...arrToDupl, ...arrToDupl]
// }

// console.log('From method' ,dupl([1,2,3]))


// Array.prototype.dupl = dupl;

// const beforeDupl = [1,2,3]
// const duplicated = beforeDupl.dupl();

// console.log('From proto', duplicated)