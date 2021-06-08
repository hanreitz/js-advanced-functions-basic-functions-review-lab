// Your code here
function saturdayFun (input = 'roller-skate') {
  return `This Saturday, I want to ${input}!`
}

const mondayWork = function(input = 'go to the office') {
  return `This Monday, I will ${input}.`
}

function wrapAdjective (flair = '*') {
  return function (input = 'special') {
    return `You are ${flair}${input}${flair}!`
  }
}

const Calculator = {
  add : function (a,b){
    return a + b
  },
  subtract : function (a,b) {
    return a - b
  },
  multiply : function (a,b) {
    return a * b
  },
  divide : function (a,b) {
    return a / b
  } 
}

function actionApplyer (startInt, arrayFn) {
  let ans = startInt
  for (let i = 0; i < arrayFn.length; i++) {
    ans = arrayFn[i](ans)
  }
  return ans
}