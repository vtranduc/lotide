# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vtranduc/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: This gets the first value of array
* `tail(array)`: This returns the array except the first value.
* `middle(array)`: Gets middle val
* `assertArraysEqual(array1, array2)`: assert Arrays are equal
* `assertEqual(value1, value2)`: assert that values are equal
* `assertObjectsEqual(object1, object2)`: asserts objects are equal
* `countLetters(someString)`: count letters
* `countOnly(someString)`: only count letters
* `eqArrays(array1, array2)`: checks if arrays are equal
* `eqObjects(object1, object2)`: checks if obejcts are equal
* `findKey(array)`: find the key
* `findKeyByValue(array)`: find the key by value
* `flatten(array)`: flattens out
* `letterPositions(someString)`: letter's position
* `map(array)`: mapping of each element in array
* `takeUntil(array)`: takes until some condition is met
* `without(array)`: without some stuff
