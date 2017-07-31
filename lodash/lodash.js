

let times = [3,4,5,6];

_.times(times.length, (i)=> {
  // console.log(times[i]);
});


//--------------------------------------------
const objA = {'a': 'hi', 'b': 'you'};
const objB = _.cloneDeep(objA);

// console.log(objB);
// console.log(objB === objA);  //false


//--------------------------------------------

//random number between two numbers
_.random(10, 20);  


//-----------assign additional properties from one obj to another----------------------------

const one = {'name': 'mario',  'age': 44 };
const two = {'name': 'trent'}

let extend = _.assign(one, two);
// console.log('EXTEND', extend);


//---------remove properties from object--------------------------------------

const removing = {1: 'yo', 2:'there', 3:'brother'};

let omit = _.omit(removing, [2]);

// console.log(omit);


//-------------pick properties from obj to keep--------------

const picking = {1: 'yo', 2:'there', 3:'brother'};

let pick = _.pick(picking, [2, 3]);

// console.log(pick);


//--------------get random items from array----------

const items = [4,5,1,3,5,9];

//if use a number for second argument you will get that many, if no arg then get 1
_.sample(items, 2);


//----------