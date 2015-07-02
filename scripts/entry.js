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
}

var john = new Person;
john.firstName('John');
john.lastName('Pedrie');
john.siblings(['Katie', 'Margaret', 'Rebekah', 'James']);

console.log(john.data);