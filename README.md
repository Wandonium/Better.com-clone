# Front-End Practice - Web Page Clone

This is a clone of the [Better Mortgage](https://better.com/) landing page. The project was built to practice my Front-End web development skills by cloning a live web page from the internet and reproduce it as closely as I could. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

This is a practice project for my Front-End web development skills. The task is to try and build a clone of an existing web page and get it as close to the original as I can. Here goes nothing ☺.

### The challenge

To reproduce the landing page of the website as closely as possible and implement all the UI designs from scratch if possible. Hence the tasks can be broken down into:
- Inspecting the page and downloading any resources needed
- Searching for any fonts and icons used on the page or any free alternatives on the internet
- Making sure the colors and animations looks as close to and smooth as the original

### Screenshots

![](./screenshots/screenshot.png)


![](./screenshots/screenshot1.png)

### Links

- Solution URL: [Solution on Github](https://github.com/Wandonium/Better.com-clone)
- Live Site URL: [Live Site on Netlify](https://wandonium-mortgage.netlify.app/)

## My process

Break the web page into parts e.g. navbar, showcase (part with mobile phone card) etc. Then build each part as a React component each with it's own styling in a separate css file. Then combine all the parts into one web page. This way any component can be reused to make other web pages.

### Built with

- ReactJS
- JSX: Html markup mixed in with javascript as per React Standards
- CSS custom properties
- Flexbox
- CSS Grid
- ES6 Javascript syntax


### What I learned

How to use custom fonts in React by including them in a fonts directory and importing them on the top most css file.

```css
@import url("./fonts/Graphik-Regular/style.css");
```

How to use css variables to control things like colors and fonts for the entire app from one file in React.

```css
:root {
  --primary-font: 'Graphik', sans-serif;
  --secondary-font: 'Montserrat', sans-serif;
  --primary-color: #281741;
  --secondary-color: #00bf92;
  --tertiary-color: #6f6f6f;
}
```

## Author

- Website - [Hillary Wando](http://hillarywando.com/)
- Codepen - [@Wandonium](https://codepen.io/wandonium)
- Twitter - [@hillarywando](https://www.twitter.com/hillarywando)
