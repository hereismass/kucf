---
layout: page
title: Layout
---

Basic page containers and a basic grid system.

## Container

Center your content with a `.container`.

{% highlight html %}
<div class="container">
  <!-- content here -->
</div>
{% endhighlight %}

## Grid system

Create rows with `.gridline` and individual columns with `.gridline__column`.

Add a fraction class to each column:

{% example html %}
<div class="gridline">
  <div class="gc--1-5 gridline__column bg-light p-2">
    .gc--1-5
  </div>
  <div class="gc--4-5 gridline__column bg-grey-light p-2">
    .gc--4-5
  </div>
</div>
<div class="gridline">
  <div class="gc--1-4 gridline__column bg-light p-2">
    .gc--1-4
  </div>
  <div class="gc--3-4 gridline__column bg-grey-light p-2">
    .gc--3-4
  </div>
</div>
<div class="gridline">
  <div class="gc--1-3 gridline__column bg-light p-2">
    .gc--1-3
  </div>
  <div class="gc--2-3 gridline__column bg-grey-light p-2">
    .gc--2-3
  </div>
</div>
<div class="gridline">
  <div class="gc--1-2 gridline__column bg-light p-2">
    .gc--1-2
  </div>
  <div class="gc--1-2 gridline__column bg-grey-light p-2">
    .gc--1-2
  </div>
</div>
<div class="gridline">
  <div class="gc--1-1 gridline__column bg-light p-2">
    .gc--1-1
  </div>
</div>
{% endexample %}

You can center a column with the `.gridline__column--centered` class.

{% example html %}
<div class="gridline">
  <div class="gc--1-2 gridline__column gridline__column--centered bg-light p-2">
    .gc--1-2
  </div>
</div>
{% endexample %}

On mobile, all `.gridline__column` are considered as a `.gc--1-1`.
You can specify different widths for tablet mode, with `.gc--t--1-5` and so on.

## Header

A kucf website header template.

{% example html %}
<div class="header">
  <a href="#" class="header__logo"></a>
  <nav class="header__menu">
    <a href="#" class="header__menu__item">Menu Item 1</a>
    <a href="#" class="header__menu__item">Menu Item 2</a>
    <a href="#" class="header__menu__item button button--small"><i class="fa fa-home"></i>Specific Item</a>
  </nav>
</div>
{% endexample %}

## Jumbotron

You can add a `.jumbotron` before a `.container` in order to use as a title or to emphasize a certain text.

{% example html %}
<div class="jumbotron">
  <h1 class="jumbotron__title">Title</h1>
  <p class="jumbotron__text">Some text</p>
</div>
{% endexample %}

## Footer

A kucf website footer template.

{% example html %}
<div class="footer">
  <nav class="footer__menu">
    <a href="#" class="footer__logo"></a>
    <a href="#" class="footer__menu__item">Menu Item 1</a>
    <a href="#" class="footer__menu__item">Menu Item 2</a>
    <a href="#" class="footer__menu__item">Menu Item 3</a>
  </nav>
  <nav class="footer__social">
    <a href="#" class="footer__social__item"><i class="fa fa-facebook"></i></a>
    <a href="#" class="footer__social__item"><i class="fa fa-twitter"></i></a>
    <a href="#" class="footer__social__item"><i class="fa fa-instagram"></i></a>
    <a href="#" class="footer__social__item"><i class="fa fa-vimeo"></i></a>
    <a href="#" class="footer__social__item"><i class="fa fa-flickr"></i></a>
  </nav>
  <nav class="footer__menu">
    <span class="footer__menu__item footer__menu__item--italic">Other Item 1</span>
    <a href="#" class="footer__menu__item footer__menu__item--italic">other Item 2</a>
    <a href="#" class="footer__menu__item footer__menu__item--italic">Other Item 3</a>
  </nav>
  <input type="text" class="footer__newsletter" placeholder="Nice placeholder text"/>
</div>
{% endexample %}
