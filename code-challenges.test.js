// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//1. create a test name capPeople and take an array of objects
//2. return an array with a sentence with their capitalized
//3. run the test and got red

describe("capPeople", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(capPeople(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

//4. create a function capPeople take in an array
//5. map trough every index and .split(" ") then .map() and replace value[0] to .toUpperCase()
//6. .join(" ") 
//7. return value of fullname and description in a sentence `${fullname} is ${desc}.`
//8. run yarn jest and got green

const capPeople = (array) => {
return array.map(nameDesc => {
  let name = nameDesc.name.split(" ").map(value => value.replace(value[0], value[0].toUpperCase()))
  let fullname = name.join(" ")
  let desc = nameDesc.occupation
  let nameTitle = `${fullname} is ${desc}.`
  return nameTitle
})
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]

//1. create a test numberOnly and take in a mixed data array and returns an arrray of only the remainders of the numbers when divided by 3
//2. expect 23, "Heyyyy!", 45, -10, 0, "Yo", false] toEqual [ 2, 0, -1, 0 ]
//3. run yarn jest and got red

describe("numberOnly", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(numberOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numberOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

//4. create a function numberOnly and take an array a parameter
//5. .filter() and take only typeof number the .map() to run through every index in the array 
//6. return value % 3
//7. run yarn jest and got green

//REFACTOR
const numberOnly = (array) => {
  return array.filter(value => typeof value === "number").map(x => { return x % 3 }
)}

//OG Code
// const numberOnly = (array) => {
//   let newArr = array.filter(value => typeof value === "number")
//   return newArr.map(x => { return x % 3 }
// )}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125

//1. create a test cubeCalc to take in an array of numbers and return the sum of all the numbers cubed
//2. expect [2, 3, 4] toEqual 99
//3. run yarn jest and got red

describe("cubeCalc", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(cubeCalc(cubeAndSum1)).toEqual(99)
    expect(cubeCalc(cubeAndSum2)).toEqual(1125)
  })
})


// b) Create the function that makes the test pass.

//4. create a function cubeCalc and take in an array as a parameter
//5. .map() return the value ** 3 and use .reduce to get the sum the numbers in the array
//6. run yarn jest and got green

//REFACTOR
const cubeCalc = (array) => {
  return array.map(value => value ** 3).reduce((a, b) => a + b, 0);
}

//OG Code
// const cubeCalc = (array) => {
//   let newArray = array.map(value => value ** 3)
//   return newArray.reduce((a, b) => a + b, 0);
// }
