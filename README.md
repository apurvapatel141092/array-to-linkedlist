# array-to-linkedlist [![NPM version](https://img.shields.io/npm/v/array-to-linkedlist.svg?style=flat)](https://www.npmjs.com/package/array-to-linkedlist/)

>  Convert an array to Singly Linked List.

[![NPM](https://nodei.co/npm/array-to-linkedlist.svg?downloads=true&stars=true)](https://www.npmjs.com/package/array-to-linkedlist/)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install array-to-linkedlist --save
```

## Usage

Convert an array to Singly Linked List, access next node by `.next` and data by `.data`

```js
var arrayToLinkedlist = require('array-to-linkedlist');

arrayToLinkedlist([1,2,3]);
//=>Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: null } } }
```

## Params

```js
arrayToLinkedlist(array);
```

* `array`: **{Array}** The Array to be converted into Singly Linked List.

## Examples

```js
var arrayToLinkedlist = require('array-to-linkedlist');

var array = [1,2,3];
var list = arrayToLinkedlist(array);

// Returns head of the linked list
console.log(list);

// Return data of the head node  
console.log(list.data));

// Return data of the next node  
console.log(list.next.data);

// Return all data

while(list){
console.log(list.data);
list = list.next;
}
```

## Running tests

Install dev dependencies and run test:

```sh
$ npm install -d && npm test
```

## Author

**Apurva Patel**

## License

Copyright © 2016, [Apurva Patel](https://github.com/apurvapatel141092).
Released under the [MIT license](https://github.com/apurvapatel141092/array-to-linkedlist/blob/master/LICENSE).

***
