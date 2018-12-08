/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = (arr1, arr2) => {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = (string) => {
  count = string.length;
  return count;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = (arr) => {
  length = arr.length;
  return length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i] === "Number")) {
      count += arr[i]; 
    }
  }
  return count;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = (arr) => {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  return lengths;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].length
  }
  return count;
};
/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = (obj) => {
  let arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = (obj) => {
  let size = 0;
  for (var key in obj) {
   console.log(key);
   size += 1;
  }
  return size;
};


/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  return arr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = (arr) => {
  arr.pop();
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = (str) => {
  let charArr = [];
  for (let i = 0; i < str.length; i++) {
    charArr.push(str[i]);
  }
  return charArr;
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = (arr) => {
 let lastStr = arr.pop();
 return lastStr.length;
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      sum += arr[i];
    }
  }
  return sum;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = (arr) => {
  let amount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 10) {
      amount += 1;
    }
  }
  return amount;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = (arr) => {
  let product = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      product = arr[i];
    } else {
      product = product * arr[i];
    }
  }
  return product;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > -1) {
      sum += arr[i];
    }
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = (arr) => {
  let amount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 4) {
      amount += 1;
    }
  }
  return amount;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = (arr) => {
  return arr.length;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = (obj) => {
  let arr = [];
  for (var key in obj) {
    arr.push(key);
  }
  return arr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = (obj) => {
  let arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = (key, value) => {
  let obj = {};
  obj[value] = key;
  return obj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = (arr) => {
  let obj = {};
  obj[arr[0]] = arr[1];
  return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = (arr) => {
  let obj = {};
  obj[arr[1]] = arr[0];
  return obj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = (obj) => {
  let arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = (obj) => {
  let arr = [];
  for (var key in obj) {
    arr.push(key);
  }
  return arr;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = (obj) => {
  let arr = [];
  for (var key in obj) {
    let tuple = [];
      tuple[0] = key;
      tuple[1] = obj[key];
      arr.push(tuple);  
  }
  return arr;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = false;
  }
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = (arr1, arr2) => {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = (obj1, obj2) => {
  let arr = [];
  for (key in obj1) {
    let tuple = [key, obj1[key]];
    arr.push(tuple);
  }
  for (key in obj2) {
    let tuple = [key, obj2[key]];
    arr.push(tuple);
  }
  return arr;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  return obj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      obj[arr[i]] = true;
    } else {
      obj[arr[i]] = false;
    }
  }
  return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }
  return obj;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].length;
  }
  return obj;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.filter(str => str === arr[i]);
    obj[arr[i]] = newArr.length;
  }
  return obj
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
};


module.exports = {
  doubleArray,
  sumArrays, 
  stringCount,
  arrayLength,
  countAll,
  countStrings,
  countAllStrings,
  convertToArray,
  objectSize,
  createZeroFilledArray,
  poppedArray,
  splitString,
  lengthOfLast,
  sumBelowTen,
  moreThanTenLetters,
  multiplyAll,
  sumAllPositive,
  stringCountBelowThree,
  countObjects,
  getObjectKeys,
  getObjectValues,
  makeObject,
  makeObjectReverse,
  tupleToObject,
  tupleToObjectReverse,
  strToKeys,
  getValues,
  getKeys,
  objectToArray,
  arrayToObject,
  arraysToObject,
  objectsToTuples,
  mapArrayValues,
  mapStringCounts,
  arrayToObjectNums,
  stringToKeys,
  charCountMap,
  frequencyMap,
  tupleConvertToObject
}
