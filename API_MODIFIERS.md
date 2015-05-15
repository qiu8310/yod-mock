## [basic.js](src/modifiers/basic.js)

### [repeat](src/modifiers/basic.js#L11-36)

Repeat last generator

__Rules:__ 

  - `(function genFn, int min = 1, int max = 10) -> *`
  - `(function genFn, int min = 1, int max = 10, string join) -> *`
  - `(function genFn, int length) -> *`
  - `(function genFn, int length, string join) -> *`
  - `(function genFn) -> *`
  - `(function genFn, string join) -> *`

__Examples:__ 

```js

yod('@Bool.repeat(2)')       // => some thing like: [true, false]
yod('@Int.repeat(3, "-")')   // => some thing like: "20-3-12"

```




### [index](src/modifiers/basic.js#L39-59)

Get indexed item in an array or indexed character in a string

__Rules:__ 

  - `(* arg) -> *`
  - `(* arg, int i = 0) -> *`

__Examples:__ 

```js

yod('@([1, 2, 3]).index(2)');  // => 3
yod('@(abc).index(2)');        // => 'c'

```




### [stringify](src/modifiers/basic.js#L61-68)

Call JSON.stringify on obj

__Rules:__ 

  - `(* obj) -> string`




### [title](src/modifiers/basic.js#L70-77)

Upper case first letter in every word

__Rules:__ 

  - `(string str) -> string`




### [cap](src/modifiers/basic.js#L79-86)

Upper case first letter in str

__Rules:__ 

  - `(string str) -> string`




### [upper](src/modifiers/basic.js#L89-98)

Upper case all letters in str

__Rules:__ 

  - `(string str) -> string`




### [lower](src/modifiers/basic.js#L100-109)

Lower case all letters in str

__Rules:__ 

  - `(string str) -> string`


