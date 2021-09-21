---
title: Javascript High Order Array methods
description: Learn about the most important and confusing topic in javascript
# date: September 20, 2021
---

Most of the time when you are working with data you will use an array. Arrays are the most used data structures for storing data in javascript. we have some common tasks like looping through an array or filtering it or do something on one element n stuff, so to do this we use a forloop which is fine for smaller code. but when your code increases the code may become messy. So the solution for this problem is using High order array methods.

All Methods:

- [`forEach`](#forEach)
- [`map`](#map)
- [`reduce`](#reduce)
- [`filter`](#filter)
- [`find`](#find)
- [`findIndex`](#findindex)

# `forEach`

This is the simplest one. It is similar to a for loop.
It just loops through the array and run the given callback for each element. The first parameter of the callback is the element and the second one is the index and the third one is the array itself.

```js
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((num, i) => console.log(num, i));
```

```shell
Output:
1 0
2 1
3 2
4 3
5 4
6 5
7 6
```

# `map`

It is similar to the forEach but the difference is, it returns an array. It just loops through the array and do something to each element.

```js
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.map((num) => {
  return num * 2;
});
```

```js
[2, 4, 6, 8, 10, 12, 14];
```

# `reduce`

This method just returns a single value by looping through an array. the first parameter for the callback is the accumulator which we can also call as a initial value and second is the element and third one is the index as forEach and map. The second parameter for the reduce method is the initial value. Sounds Confusing? See The Example

**Example**: Add all numbers in an array:

```js
const arr = [1, 2, 3, 4, 5, 6, 7];

const total = arr.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(total);
```

- Here the accumulator is `0`

- At the first iteration the num is `1`, so `0 + 1 = 1`

- At the second iteration the num is `2`, so `1 + 2 = 3` and so on...

Finnaly the value is `28`

# `filter`

The filter method also creates a new array. but on the resulting array the elements which passes the condition which is returned from the callback will be in the array.

**Example**: Get Even numbers from an array

```js
const arr = [1, 2, 3, 4, 5, 6, 7];

const even = arr.filter((num) => {
  return num % 2 === 0;
});

console.log(even);
```

```js
[2, 4, 6];
```

- At the first iteration the number is `1`, so `1 % 2` is not equal to `0`, so its not added to the array.

- At the first iteration the number is `2`, so `2 % 2` is `0`, so it will be added to the array.

and so on...

# `find`

This method returns the first element which passes the condition which is returned in the callback.

**Example**: Find apple in an array of objects

```js
const fruits = [
  { name: "bananas", quantity: 20 },
  { name: "watermelon", quantity: 2 },
  { name: "orange", quantity: 10 },
  { name: "apples", quantity: 15 },
];

const apple = fruits.find((fruit) => {
  return fruit.name === "apples";
});

console.log(apple);
```

```bash
{ name: 'apples', quantity: 15 }

```

# `findIndex`

This method returns the index of the first element that passes the condition which is returned in the callback.

Note: It returns -1 if no element was found.

**Example**: Get index of the game PUBG

```js
const games = ["Minecraft", "Super Mario", "Call of duty", "PUBG"];

const pubg = games.findIndex((game) => {
  return game === "PUBG";
});

console.log(pubg);
```

```bash
3
```

# Conclusion

As you can see every method has different functionality. So, don't use for loops anymore use these methods as they increase your productivity and code readability. See you in my next article bye :)

**Challenge**:
Try to write the examples in normal for loops you will understand the difference 😉
