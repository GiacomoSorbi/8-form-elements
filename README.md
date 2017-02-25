# LEARNING REACT 8 - FORM ELEMENTS
React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to two components: `UserDisplay` and `UserInfoCollect`.

The latter is populated with information typed by the user and the former gets updated when a submit button is pressed.

You are free to collect as much information as you wish, just be sure to include at least first name, surname and level; also, using different input fields (select or checkbox fields, textareas, etc) is highly recommended.

```
const menuItems = [
  {title: 'Home', classes: 'menu-main', action: () => {setState({display: 'home'})}, status: 'enabled'},
  {title: 'Our products', classes: 'menu-opt', action: () => {setState({display: 'products'})}, status: 'enabled'},
  {title: 'About us', classes: 'menu-opt', action: () => {setState({display: 'aboutUs'})}, status: 'enabled'},
  {title: 'Special offers', classes: 'menu-opt', action: () => {setState({display: 'specialOffers'})}, status: 'disabled'}
];
```

## Extra notes and tips

How would you split each components into subcompoments? Is it worth it? If so, why? Otherwise, why not?

How could you make the `UserInfoCollect` disappear when the submit button is pressed? How could you make it appear again when an "edit profile" button is pressed?

Do you think you could make each subfield editable directly on `UserDisplay`? If so, which would be the best approach? If not, why?
