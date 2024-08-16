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
/*
class PersonCl {
    constructor(fullName, birthYear){
     this.fullName=fullName;
     this.birthYear=birthYear;
    }
    //Methods will be added to prototype property
 calAge(){
    console.log(2024-this.birthYear);
 }
 greet(){
 console.log(`Hey ${this.fullName}`);
 }

 get age(){
    return 2024-this.birthYear;
 }
 set fullName( name){
    console.log(name);
    if(name.includes(' ')){
        this._fullName=name;

    }else{
        alert(`${this.name} is not full name.`)
    }
 }
 get fullName(){
 return this._fullName;
 }

 static hey(){

    console.log("Hey there!");
    console.log(this);
 }
}
const sunita= new PersonCl('Sunita Khatri', 2004);
console.log(sunita);
sunita.calAge();

console.log(sunita.__proto__===PersonCl.prototype);

// PersonCl.prototype.greet=function(){
//     console.log(`Hey ${this.fullName}`);
// }
sunita.greet();
console.log(sunita.age);

//1. classes are Not hoisted
//2. classes are first-class citizen
//3. classes are executed in strict mode
  
const walter= new PersonCl('Walter Dhakal',1967)
PersonCl.hey();
//Getters and Setters

const account={
    owner:'Bishal',
     movements:[200,530,120,300],
     get latest(){
return this.movements.slice(-1).pop();

     },
     set latest(mov){
      this.movements.push(mov);
     }
}

console.log(account.latest)

console.log(account.latest=50)
*/

const PersonProto = {
  calAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ram = Object.create(PersonProto);
console.log(ram);
ram.name = 'Ram';
ram.birthYear = 2001;
ram.calAge();

console.log(ram.__proto__ === PersonProto);

const anjila = Object.create(PersonProto);
anjila.init('Anjila', 2003);
anjila.calAge();
