'use strict';

import Strict from "./type-checker.js";
import Types  from "./types.js";

class Person {
  constructor() {
    this.data = {};
  }

  @Strict(Types.string)
  firstName(name) {
    this.data.firstName = name;
  }

  @Strict(Types.string)
  lastName(name) {
    this.data.lastName = name;
  }

  @Strict(Types.array)
  siblings(siblings) {
    this.data.siblings = siblings;
  }

  @Strict(Types.number, Types.number, Types.number)
  phoneNumber(areaCode, firstThree, lastFour) {
    this.data.phoneNumber = {
      areaCode: areaCode,
      firstThree: firstThree,
      lastFour: lastFour
    };
  }
}

var john = new Person;
john.firstName('John');
john.lastName('Pedrie');
john.siblings(['Katie', 'Margaret', 'Rebekah', 'James']);
john.phoneNumber(555, 555, 1234);

console.log(john.data);