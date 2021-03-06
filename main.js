/******************
 * YOUR CODE HERE *
******************/

const doubleAll = function(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    // result[i]= arr[i] * 2
    result.push(arr[i] * 2)
  }
  return result;
} 

const yelledGreetings = function(arr){
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + '!')
  }
  return result
}

const absoluteValues = function(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.abs(arr[i]))
  }
  return result
}


// way 1: Use 1 loop
const upperCaseFirstLetters = function(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    let firstChar = arr[i][0].toUpperCase()
    let theRestChar = arr[i].toLowerCase().slice(1)
    result.push(firstChar + theRestChar)
  }
  return result;
}

// // way 2: Use 2 loops
// const upperCaseFirstLetters = function(arr) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].toLowerCase()
//     let titleCaseName = ''
//     for (let k = 0; k < name.length; k++) {
//       if (k === 0) {
//         titleCaseName += name[k].toUpperCase()
//       } else {
//         titleCaseName += name[k]
//       }
//     }
//     result.push(titleCaseName)
//   }
//   return result;
// }

const changeToInitials = function(arr) {
  let result = []
  for (let i = 0; i<arr.length; i++) {
    let fullName = arr[i]
    let initialsOfFullName = ''
    for (let k=0; k< fullName.length; k++) {
      if (k===0) {
        initialsOfFullName += fullName[k].toUpperCase()
      }
      if (fullName[k] === ' ') {
        initialsOfFullName += fullName[k + 1].toUpperCase()
      } 
    }
    result.push(initialsOfFullName)
  }
  return result
}

  const doubleOdd = function(arr) {
 let result = []

 for (let i=0; i<arr.length; i++) {
   let isInteger = Number.isInteger(arr[i])
   let isOdd = arr[i] % 2 !== 0

   if ( isOdd && isInteger ) {
     result.push(arr[i] * 2)
   } else {
    result.push(arr[i])
   }
 }
 return result
} 

const add1ToLeft = function(arr) {
  let result = []
  for (let i = 0; i<arr.length; i++) {
    let add1ToPositive = '1'.concat(arr[i])
    let addMinus1ToNegative = '-1'.concat(Math.abs(arr[i]))
    if (arr[i] > 0) {
      result.push(Number(add1ToPositive))
    } else {
      result.push(Number(addMinus1ToNegative))
    }
  } 
  return result
}





/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
