/////////////////////////////
// Lecture: Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge  = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/



/////////////////////////////
// Lecture: Object.create
/*
var personProto = {
  calculateAge: function(){
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name= 'John';
john.yearOfBirth=1994;
john.job = 'teacher';

var cesar = Object.create(personProto,
  {
    name: {value: 'Cesar'},
    yearOfBirth: {value: 1994},
    job: {value: 'Developer'}
});
*/


// Primitives vs Objects
/*
// Primitives
var x = 6
var y = x;
x = 69;
console.log(x);
console.log(y);

// Objects
var obj1 = {
  name : 'Cesar',
  age: 24
};

var obj2 = obj1;

obj1.name='Arlenys';
obj2.age = 30;
console.log(obj1.name);
console.log(obj2.name);



console.log(obj1.age);
console.log(obj2.age);



// Functions

var age = 27;
var obj = {
  name:'Jonas',
  city:'Lisbon'
};

function change(a,b) {
  a = 30
  b.city = 'Rep. Dom.'
};

change(age,obj);
console.log(age)
console.log(obj.city);
*/
