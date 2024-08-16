'use strict';
const Person=function(firstName,birthYear){
// console.log(this);
//instance properties
this.firstName=firstName;
this.birthYear=birthYear;
//Never do this 
// this.calAge=function(){
//     console.log(2024-this.birthYear);
// };
}
const bishal=new Person('Bishal',2001);
console.log(bishal);

//1.new {} is created
//2 function is called, this={}
//3. {} linked to prototype
//4. function automatically return {}

const bibek=new Person('bibek', 2002);
const  bikiran=new Person("Bikiran",2003);
console.log(bibek, bikiran)

console.log(bishal instanceof Person);

//prototypes

console.log(Person.prototype)
Person.prototype.calAge=function(){
    console.log(2024-this.birthYear);
};
bishal.calAge();
bibek.calAge();

console.log(bishal.__proto__)
console.log(bishal.__proto__===Person.prototype)

console.log(Person.prototype.isPrototypeOf(bishal))

console.log(Person.prototype.isPrototypeOf(Person))

//.prototypeOfLinkedObjects

Person.prototype.species='Homo sapiens';
console.log(bishal.species)