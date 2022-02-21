// problem 1.
const num = 3212;
function squareDigits(n) {
  let output = "";
  let numTostr = n + "";
  numTostr = numTostr.split("");
  for (let i = 0; i < numTostr.length; i++) {
    const num = Number(numTostr[i]);
    output += num ** 2;
  }
  console.log(Number(output));
}
// squareDigits(3212), 9414 -----> output
// squareDigits(num);

// problem 2.
// bug
function duplicateCount(text) {
  let count = 0;
  text.toLowerCase();
  const tempArr1 = text.split("");
  const tempArr2 = text.split("");
  tempArr1.sort();
  tempArr2.sort();
  for (let i = 0; i < tempArr1.length; i++) {
    console.log(tempArr1[i], tempArr2[i]);
    if (tempArr1[i] === tempArr2[i]) {
      count++;
    } else {
      return;
    }
  }
  return count;
}

// aabbcde -> 2 -----> output

const str = "aabbcde";
const str2 = "baabbcde";
console.log(duplicateCount(str));

// problem 3.

function XO(str) {
  const tempStr = str.toLowerCase();
  const x = "x";
  const o = "o";
  let xCount = 0;
  let oCount = 0;

  if (!tempStr.includes(x) && !tempStr.includes(o)) {
    return true;
  }

  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr.charAt(i) === x) {
      xCount++;
    } else if (tempStr.charAt(i) === o) {
      oCount++;
    }
  }
  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("ooom"));

// problem 4 .

function getSum(a, b) {
  let arr = [a, b];
  arr = arr.sort((a, b) => {
    return a - b;
  });
  const [small, large] = arr;

  let sum = 0;
  for (let i = small; i <= large; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(-547, -464));

// problem 5.

// Test.assertEquals(getMiddle("testing"),"t");
// Test.assertEquals(getMiddle("middle"),"dd");

function getMiddle(str) {
  if (str.length % 2 === 0) {
    const numSlicer = str.length % 3;
    const tempStr = str.splice(numSlicer);
    console.log(tempStr);
  } else {
    return;
  }
}

console.log(getMiddle("testing"));

// problem 5
// Test.assertEquals(getMiddle("testing"),"t");
// Test.assertEquals(getMiddle("middle"),"dd");
const strSplicer = function (arr, n) {
  const numSlicer = Math.floor(arr.length / n);
  const tempStr = arr.splice(numSlicer);
  let finalOutput = tempStr.splice(-numSlicer);
  finalOutput = tempStr.splice(-numSlicer);
  return finalOutput.join("");
};

function getMiddle(str) {
  const strToArr = str.split("");
  console.log(strToArr.length);
  if (strToArr.length % 2 === 0) {
    return strSplicer(strToArr, 3);
  } else {
    return strSplicer(strToArr, 2);
  }
}

const str = "test";
const arr = str.split("");
console.log(strSplicer(arr,3));

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  if (str.length % 2 === 0) {
  } else {
  }
}

const str = "abc";
console.log(str.slice(0,2));
