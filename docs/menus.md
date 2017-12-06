---
layout: page
title: Menus
---

## Simple menu

The simplest menu. you can use lists, `div`s or `nav`s, it doesn't matter.

Use `.menu__item--selected` for the selected item.

You can add FontAwesome icons in a menu item.
{% example html %}
<div class="menu">
  <a href="#" class="menu__item">Item 1</a>
  <a href="#" class="menu__item">Item 2</a>
  <a href="#" class="menu__item menu__item--selected">Item 3</a>
  <a href="#" class="menu__item">Item 4</a>
</div>
{% endexample %}

### Colors

You can change the color of a selected item with a modifier class like `.menu__item--second`.

{% example html %}
<div class="menu bg-grey">
  <a href="#" class="menu__item menu__item--selected menu__item--second"><i class="fa fa-shopping-cart"></i>Item 1</a>
  <a href="#" class="menu__item"><i class="fa fa-shopping-cart"></i>Item 2</a>
  <a href="#" class="menu__item menu__item--selected menu__item--white"><i class="fa fa-shopping-cart"></i>Item 3</a>
  <a href="#" class="menu__item"><i class="fa fa-shopping-cart"></i>Item 4</a>
</div>
{% endexample %}

## Two levels menu

You can add a submenu with `.submenu`. It can be inside a `.menu__item` or directly next to it.
You can add submenus item with `.submenu__item`. Mark it selected with `.submenu__item--selected`.
A color modifier used on the parent or precendent `.menu__item` will automatically be used for the `.submenu__item`s of the submenu.

Two examples using `ul li`s and `nav`. You can also use `div`s. Be sure to apply the `.menu__item` and `submenu__item` classes to the text element and not its container.

{% example html %}
<ul class="menu">
  <li class="menu__item menu__item--selected menu__item--third">Item 1
    <ul class="submenu">
      <li class="submenu__item">Subitem 1</li>
      <li class="submenu__item">Subitem 2</li>
      <li class="submenu__item submenu__item--selected">Subitem 3</li>
      <li class="submenu__item">Subitem 4</li>
    </ul> 
  </li>
  <li class="menu__item">Item 2</li>
  <li class="menu__item">Item 3</li>
  <li class="menu__item">Item 4</li>
</ul>
<nav class="menu">
  <a href="#" class="menu__item menu__item--selected menu__item--fourth">Item 1</a>
    <nav class="submenu">
      <a href="#" class="submenu__item">Subitem 1</a>
      <a href="#" class="submenu__item">Subitem 2</a>
      <a href="#" class="submenu__item submenu__item--selected">Subitem 3</a>
      <a href="#" class="submenu__item">Subitem 4</a>
    </nav>
  <a href="#" class="menu__item">Item 2</a>
  <a href="#" class="menu__item">Item 3</a>
  <a href="#" class="menu__item">Item 4</a>
</nav>
{% endexample %}

### Dropdown

You can add `.menu--dropdown` modifier to your menu in order to set it as a dropdown menu for the second level menus.

You will have use a specific DOM, as shown in these examples.

{% example html %}
<ul class="menu menu--dropdown">
  <li>
    <label for="item1" class="menu__item menu__item--selected menu__item--second">Item 1</label>
    <input type="checkbox" id="item1"/>
    <ul class="submenu">
      <li class="submenu__item">Subitem 1</li>
      <li class="submenu__item">Subitem 2</li>
      <li class="submenu__item submenu__item--selected">Subitem 3</li>
      <li class="submenu__item">Subitem 4</li>
    </ul> 
  </li>
  <li class="menu__item">Item 2</li>
  <li class="menu__item">Item 3</li>
  <li class="menu__item">Item 4</li>
</ul>
<nav class="menu menu--dropdown">
  <label for="item2" class="menu__item menu__item--selected menu__item--third">Item 1</label>
  <input type="checkbox" id="item2"/>
    <nav class="submenu">
      <a href="#" class="submenu__item">Subitem 1</a>
      <a href="#" class="submenu__item">Subitem 2</a>
      <a href="#" class="submenu__item submenu__item--selected">Subitem 3</a>
      <a href="#" class="submenu__item">Subitem 4</a>
    </nav>
  <a href="#" class="menu__item">Item 2</a>
  <a href="#" class="menu__item">Item 3</a>
  <a href="#" class="menu__item">Item 4</a>
</nav>
{% endexample %}

