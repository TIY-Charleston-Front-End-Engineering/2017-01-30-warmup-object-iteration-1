//-----------------------------------------
// EXERCISE 1 : partyBouncer()
//   You are having a party where alcohol will be served
//   and you don't want to let in underage guests or rowdy felons
//
//   Take an array of objects, test to see which guests are older than 18
//   and convert it into an array of strings with the name only.
//------------------------------------------

//INPUT: Array of Objects
function partyBouncer(arrOfObjects){
   var arrOfNames = []

   for(var i = 0 ; i < arrOfObjects.length; i++){
      var personObj = arrOfObjects[i]
      if( personObj.age >= 18 && personObj.isFelon === false ){
          arrOfNames.push( personObj.name )
      }
   }
   
   return arrOfNames
   
   //OUTPUT : Array of Strings
}



var listOfPeople = [
  { name: 'Jimmy Drayfus', age: 16, isFelon: true },
  { name: 'Sherry Tomkins', age: 33, isFelon: false },
  { name: 'Romy Podolski', age: 17, isFelon: false },
  { name: 'Buffy Chang', age: 25, isFelon: true },
  { name: 'Rufus Johnson', age: 38, isFelon: false },
  { name: 'Tammy Barkley', age: 20, isFelon: false },
  { name: 'Harry McCormick', age: 39, isFelon: false},
  { name: 'Shannon O\'Bannon', age: 31, isFelon: false},
  { name: 'Greta Irishkov', age: 22, isFelon: false},
  { name: 'Maria Lewandowski', age: 28, isFelon: true},
  { name: 'Bobby Francois', age: 28, isFelon: false},
  { name: 'Salomon Marzococo', age: 14, isFelon: false },
  { name: 'Ahmad Funchess', age: 44, isFelon: true}
]


var guestList = partyBouncer(listOfPeople)

console.assert(guestList.length === 7)
console.assert(guestList[0] === "Sherry Tomkins")
console.assert(guestList[1] === "Rufus Johnson")
console.assert(guestList[6] === "Bobby Francois")

console.assert(guestList.indexOf('Jimmy Dreyfus') === -1)
console.assert(guestList.indexOf('Romy Podolski') === -1)
console.assert(guestList.indexOf('Ahmad Funchess') === -1)



console.log('+===========')

// ---------------------------------------
// EXERCISE 2 : keyMirror()
//  (taking an object and transforming it to another modified object)
// ---------------------------------------
// Write a `keyMirror` function that takes an object with a set of properties
// whose values are set to `null`. The function should return another object
// with the properties and values 'mirrored' -- with both the properties & values
// as an UPPERCASE string

// var myActionNames = {
//    GET_records: '',
//    GET_SINGLE_RECORD: '',
//    Create_Record: ''
//    ...
// }

// keyMirror(myActionNames)
// => {
//   GET_RECORDS: 'GET_RECORDS',
//   GET_SINGLE_RECORD: 'GET_SINGLE_RECORD',
//   CREATE_RECORD: 'CREATE_RECORD'
//   ...
// }

//INPUT : Object
var keyMirror = function(inputObj){
   var newObj = {}

   for (var propString in inputObj){
      var allCapsPropertyName = propString.toUpperCase()
      newObj[ allCapsPropertyName ] = allCapsPropertyName
   }
   
   return newObj
   //OUTPUT : Transformed Object
}

var myActionNames = {
   GET_records: null,
   GET_SINGLE_RECORD: null,
   Create_RECORD: null,
   update_record: null,
   DELETE_RECORD: null
}

var actionNamesIndex = keyMirror(myActionNames)

console.assert(actionNamesIndex.GET_RECORDS === 'GET_RECORDS')
console.assert(actionNamesIndex.UPDATE_RECORD === 'UPDATE_RECORD')
// -------------------------------------------
console.assert(typeof actionNamesIndex.GET_records === 'undefined')
console.assert(actionNamesIndex.CREATE_RECORD !== 'Create_Record')
console.assert(actionNamesIndex.update_record !== 'UPDATE_RECORD')
