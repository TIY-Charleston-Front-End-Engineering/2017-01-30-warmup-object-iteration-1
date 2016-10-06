// ---------------------------------------
// EXERCISE 1 : getKeys()
//  (taking an object and transforming it to another modified object)
// ---------------------------------------
// Write a `getKeys` function that takes an object and returns
// an array of its keys (properties)

var getKeys = function(){

}

var sampleObject = {
   name: 'Cheech Williams',
   balance: -420,
   dob: '01-08-1990',
   accountFrozen: true,
   originalBranch: "Dallas - North",
   signUpDate: "02-14-2002",
   rewardPoints: 921
}

var keysOfSample = getKeys(sampleObject)

//assertion to see that these values are in the array returned to 'keysOfSample'
console.assert( keysOfSample.indexOf('dob') >= 0 )
console.assert( keysOfSample.indexOf('originalBranch') >= 0 )
console.assert( keysOfSample.indexOf('balance') >= 0 )

//this assertion checks that these values are NOT in `keysOfSample`
console.assert( keysOfSample.indexOf('Cheech Williams') < 0 )
console.assert( keysOfSample.indexOf('Dallas - North') < 0 )
console.assert( keysOfSample.indexOf(921) < 0 )


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


var myActionNames = {
   GET_records: null,
   GET_SINGLE_RECORD: null,
   Create_RECORD: null,
   update_record: null,
   DELETE_RECORD: null
}

var actionNamesIndex = keyMirror(myActionNames)

console.assert(actionNamesIndex.GET_RECORDS === 'GET_RECORDS')
console.assert(typeof actionNamesIndex.GET_records === 'undefined')
console.assert(actionNamesIndex.CREATE_RECORD !== 'Create_Record')
console.assert(actionNamesIndex.update_record !== 'UPDATE_RECORD')
