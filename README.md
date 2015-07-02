# ES7 Decorators + Type Hints

This is an experiment I am playing around with in implementing basic argument
typing in javascript using ES7's Decorator feature.

To try it out, follow these instructions:

1. Clone this repository
2. Run `npm install`
3. Run `gulp watch`
4. Open index.html in Chrome and inspect the output.

A working example can be found in `scripts/entry.js`.

## Decorating method signatures

If you haven't read what ES7 Decorators are, it is advised that you read the
[design proposal](https://github.com/wycats/javascript-decorators).

This project provides a decorator called `Strict`, which takes as arguments a
list of the type checkers corresponding to each argument.

````javascript

'use strict';

import Strict from "./type-checker.js";
import Types  from "./types.js";

class Pet {

  @Strict(Types.string)
  setPetName(name) {
    this.name = name;
  }

  @Strict(Types.number)
  setPetAge(age) {
    this.age = age;
  }
}

var fido = new Pet;
pet.setPetName('fido');
pet.setPetAge('about 12'); // error!
````

## Available Type Tests

Types are tested against methods on the Types object. Each method must return a
boolean result (true for pass, false for fail).

The `Strict` decorator expects function references as arguments. Any function
reference that returns a boolean value is allowed. This allows for more complex
validation, as in the case of the `class` type checker referenced below. Where
the majority of the implemented type checkers are passed to the decorator
directly, `class` is invoked with the class name to match the argument against.

For example:

````js
var friend = new Person;

@Strict(Types.class('Person'))
function addFriend(friendInstance) {
  // do stuff
}

addFriend(friend);
````

Currently implemented methods include:

* `string`
* `array`
* `number`
* `object`
* `any`
* `class`
