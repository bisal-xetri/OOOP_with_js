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
/*
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
*/

//challenge 2

/*
class CarCl{
    constructor(make, speed){
    this.make=make;
    this.speed=speed;
}

accelerate(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

break(){
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

get speedUS(){
    return this.speed/1.6;
}

set speedUs(speed){
    this.speed=speed*1.6;
}
}
const ford= new CarCl('Ford', 120);
// console.log(ford.speedUS)
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.speedUs=50;
// console.log(ford)

const Person=function(firstName,birthYear){
// console.log(this);
//instance properties
this.firstName=firstName;
this.birthYear=birthYear;
//Never do this
this.calAge=function(){
    console.log(2024-this.birthYear);
};
}
const Student =function(firstName, birthYear,course ){
    Person.call(this,firstName,birthYear);
    this.firstName=firstName;
    this.birthYear=birthYear;
    this.course=course;

}

 
Student.prototype=Object.create(Person.prototype)


Student.prototype.introduce=function(){
console.log(`My name is ${this.firstName} and i study ${this.course}`)
}

const biki= new Student("Biki",2003, 'computer Science');
console.log(biki)
biki.introduce();
 biki.calAge();


 console.log(biki instanceof Student)
 console.log(biki.__proto__);
 console.log(biki.__proto__.__proto__);


 console.dir(Student.prototype.constructor)
 */
/*
 //challenge 3
  const Car= function(make, speed){
        this.make=make;
        this.speed=speed;
    }
    
    Car.prototype.accelerate=function(){
    
        this.speed+=10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    Car.prototype.break=function(){
    
        this.speed-=5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    
    const EV= function(make, speed, charge){
        Car.call(this, make, speed)
       
        this.charge=charge;
    }
    EV.prototype=Object.create(Car.prototype);
    EV.prototype.chargeBattery= function(chargeTo){
        this.charge=chargeTo;
    } 

     EV.prototype.accelerate=function(){
        this.speed+=20;
        this.charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
    
     }
    const tesla=new EV("Tesla",120,23)

    tesla.chargeBattery(90)
    console.log(tesla)

    tesla.break();
    tesla.accelerate()
*/

//Using ES6 classes
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
  
 }
}
class StudentCl extends PersonCl {
   constructor(fullName, birthYear,course){
    //Always need to happen first
    super(fullName, birthYear);
    this.course=course;

   }
   introduce(){
    console.log(`My name is ${this.fullName} and i study ${this.course}`);

   }
   calAge(){
    console.log(`I'm ${2024-this.birthYear} years old, but as a student I feel more like ${2024-this.birthYear+10}`)
   }
}

const asmi= new StudentCl("Asmi Panthi", 2001, "BBA");
asmi.introduce();
asmi.calAge()
*/ /*
const PersonProto = {
    calAge() {
      console.log(2024 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
const bishal= Object.create(PersonProto);
const StudentProto=Object.create(PersonProto);

StudentProto.init=function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course=course;
}

StudentProto.introduce=function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const bijay=Object.create(StudentProto);
bijay.init('Bijay', 1999, 'computer SCIENCE');
bijay.introduce()

bijay.calAge()
*/

//class example2

//public field
//private fields
//public method
//private method
//there is static version
/*
class Account {
  //public field (instances)
  locale = navigator.language;



  //2) private Field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected
    // this._movements=[];
    // this.locale=navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  ////public method
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this, this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!!`);
      return this;
    }
  }
  static helper(){
    console.log("Helper")
  }
  //private method
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Bishal', 'Rs', 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-20);

acc1.deposit(50);
acc1.withdraw(20);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

//console.log(acc1.movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(1000))
Account.helper();

//chaining 
acc1.deposit(300).deposit(500)
.withdraw(35).requestLoan(2500).withdraw(400);
*/
//coding challenge 4
class CarCl{
    constructor(make, speed){
    this.make=make;
    this.speed=speed;
}

accelerate(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this
}

break(){
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
}

get speedUS(){
    return this.speed/1.6;
}

set speedUs(speed){
    this.speed=speed*1.6;
    return this
}
}

class EVCL extends CarCl{
    
#charge;
constructor(make, speed, charge){
    super( make, speed)
   
    this.#charge=charge;
}

chargeBattery (chargeTo){
    this.#charge=chargeTo;
} 
accelerate(){
    this.speed+=20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);

 }
 
}

const rivian=new EVCL('Rivian' ,123,55);
console.log(rivian)
// console.log(rivian.#charge)

rivian.accelerate().accelerate().break().chargeBattery(40)