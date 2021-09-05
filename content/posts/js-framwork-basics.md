---
title: Basics of a javascript Framwork
description: Read this article before you learn any javascript framework!
---

But, why you should learn a javascript framework? For example if you want to display the input the of a textbox. you will be selecting the element and will add a event listener and select the element where you want to display and set the innerHTML to it.

```js
const inp = document.querySelector("input");
const p = document.querySelector("p");

inp.addEventListener("input", function(e) {
  p.textContent = e.target.value;
});
```

This is better for smaller applications. but when your code increases the number of elements you selecting will be increase and adding event listeners for all elements is not fun right? So javascript frameworks give a solution to all of this. Here's the same application with vue

<iframe height="300" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/Lakshmi-Chaitanya/embed/NWgRBPN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Lakshmi-Chaitanya/pen/NWgRBPN">
  </a> by Lakshmi Chaitanya (<a href="https://codepen.io/Lakshmi-Chaitanya">@Lakshmi-Chaitanya</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

The code is still large right? but it is more organized than our old code.

# What is reactivity?

Reactivity is a programming paradigm that allows us to adjust to changes in a declarative manner.

Sounds Confusing?

Let's take the example of a spread sheet.

<video width="320" height="240" controls>

  <source
    src="https://v3.vuejs.org/images/reactivity-spreadsheet.mp4"
    type="video/mp4"
  />
</video>

_source: vue docs_

As we can see when we change the first number the sum changes.
but this is not the case with javascript. Javascript is not reactive inbuilt. Let's see a example

```js
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;

console.log(sum); // 5

num1 = 3;

console.log(sum); // Still 5
```

Javascript frameworks solves this issue by using a concept called virtual DOM.

# Virtual DOM

Let's take a example. So your room is so messy in your house. you wanted to clean it. What is your first step? will you clean the whole house or just the room? The answer is definitly the room. That's what the virtual DOM does.

Javascript just re-renders the whole thing if any changes are done in the DOM.

But in case of framworks. they will create a virtual DOM and compare it with the actual DOM. And only the part which is different will be added instead of re-rendering the whole DOM.

# Components

Ok, so you want to make a website which has a header, footer, content, and a sidebar

![basic website](../components-example.png)

In a basic html site you will be adding everything in one index.html file right? So you want to change the content of the footer you will be scrolling until you find the footer. and if you want to add another thing to you site you have to again do it in your index.html and the file size will be growing as your site grows. The solution for this problem is components. In every framework you will see this concept.

So basically you will have a main file. so for every component like the header,footer etc you will create a component file and import them to your main file and render them like a html tag.

# Conclusion

Now with concepts you learn any javascript framework like React, Angular, Vue, Svelte etc. but if you are confused which framwork to learn just build a todolist with every framework and choose what framwork you like.
