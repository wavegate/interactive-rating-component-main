# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/wavegate/interactive-rating-component-main](https://github.com/wavegate/interactive-rating-component-main)
- Live Site URL: [https://frabjous-pie-b842c4.netlify.app/](https://frabjous-pie-b842c4.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

Adding a style via Javascript directly adds an inline style which overrides CSS, so instead I needed to dynamically add and remove classes to apply styling. Also used radial gradients for the first time.

```js
event.target.classList.add("selected");
```

### Continued development

I'm not sure how they got the correct gradient with the colors provided.

### Useful resources

- [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en) - I used this Chrome extension to overlay the design images, which was very helpful for getting the right size values.

## Author

- Website - [wavegate](https://github.com/wavegate)
- Frontend Mentor - [@wavegate](https://www.frontendmentor.io/profile/wavegate)
