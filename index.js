// Code your solution in this file!
let returnFirstTwoDrivers = (d) => {
  let a = []
  a.push(d[0], d[1])
  return a
}

let returnLastTwoDrivers = (d) => {
  let a = []
  a.push(d[d.length -2], d[d.length -1])
  return a
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

let createFareMultiplier = (a) => {
  return function (b) {return a * b}
}

let fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)

let selectDifferentDrivers = (arrayOfDrivers, func) => {
 return func(arrayOfDrivers)
}