'use strict';
// const Person=function(firstName,birthYear){
// // console.log(this);
// //instance properties
// this.firstName=firstName;
// this.birthYear=birthYear;
// //Never do this 
// // this.calAge=function(){
// //     console.log(2024-this.birthYear);
// // };
// }
// const bishal=new Person('Bishal',2001);
// console.log(bishal);

// //1.new {} is created
// //2 function is called, this={}
// //3. {} linked to prototype
// //4. function automatically return {}

// const bibek=new Person('bibek', 2002);
// const  bikiran=new Person("Bikiran",2003);
// console.log(bibek, bikiran)

// console.log(bishal instanceof Person);

// //prototypes

// console.log(Person.prototype)
// Person.prototype.calAge=function(){
//     console.log(2024-this.birthYear);
// };
// bishal.calAge();
// bibek.calAge();

// console.log(bishal.__proto__)
// console.log(bishal.__proto__===Person.prototype)

// console.log(Person.prototype.isPrototypeOf(bishal))

// console.log(Person.prototype.isPrototypeOf(Person))

// //.prototypeOfLinkedObjects

// Person.prototype.species='Homo sapiens';
// console.log(bishal.species);

// // console.log(bishal.__proto__);
// // console.log(bishal.__proto__.__proto__);
// // console.log(bishal.__proto__.__proto__.__proto__);

// //console.log(Person.prototype.constructor);

// const arr=[3,3,6,9,3,10];
// // console.log(arr.__proto__===Array.prototype);

// // console.log(arr.__proto__.__proto__);


// Array.prototype.unique=function (){
//     return [...new Set(this)];
// }
// console.log(arr.unique());

// // const h1=document.querySelector("h1");
// // console.dir(x=>x+1);

// //challenge 1
// const Car= function(make, speed){
//     this.make=make;
//     this.speed=speed;
// }

// Car.prototype.accelerate=function(){

//     this.speed+=10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// Car.prototype.break=function(){

//     this.speed-=5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const bmw=new Car("BMW", 120);
// const mercedes=new Car("Mercedes", 95);

// console.log(bmw, mercedes);
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();

//Es6 classes
//class expression
// const PersonCl=class{}
//class declaration
class PersonCl {
    constructor(firstName, birthYear){
     this.firstName=firstName;
     this.birthYear=birthYear;
    }
    //Methods will be added to prototype property
 calAge(){
    console.log(2024-this.birthYear);
 }
 greet(){
 console.log(`Hey ${this.firstName}`);
 }
}
const sunita= new PersonCl('sunita', 2004);
console.log(sunita);
sunita.calAge();

console.log(sunita.__proto__===PersonCl.prototype);

// PersonCl.prototype.greet=function(){
//     console.log(`Hey ${this.firstName}`);
// }
sunita.greet();

//1. classes are Not hoisted
//2. classes are first-class citizen
//3. classes are executed in strict mode
