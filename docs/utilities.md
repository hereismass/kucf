---
layout: page
title: Utilities
---

Utilities for margins, paddings, borders, backgrounds, etc.

## Floats

Quickly float something to the left or right, and clear them later.

{% example html %}
<div class="clearfix">
  <code class="float-left bg-grey-light p-1 br-xsmall">.float-left</code>
  <code class="float-right bg-grey-light p-1 br-xsmall">.float-right</code>
</div>
{% endexample %}

## Text alignment

Change the `text-align` on elements with a class.

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-center">Center aligned text.</p>
{% endexample %}

## Background colors

Fill in an element with background colors.

{% example html %}
<span class="d-inline-block p-2 bg-white">.bg-white</span>
<span class="d-inline-block p-2 bg-grey-light">.bg-grey-light</span>
<span class="d-inline-block p-2 bg-dark text-white">.bg-dark</span>
<span class="d-inline-block p-2 bg-light">.bg-light</span>
<span class="d-inline-block p-2 bg-grey">.bg-grey</span>
<span class="d-inline-block p-2 bg-first">.bg-first</span>
<span class="d-inline-block p-2 bg-second">.bg-second</span>
<span class="d-inline-block p-2 bg-third">.bg-third</span>
<span class="d-inline-block p-2 bg-fourth text-white">.bg-fourth</span>
<span class="d-inline-block p-2 bg-fifth text-white">.bg-fifth</span>
{% endexample %}

## Text color

Change the `color` of elements with a class.

{% example html %}
<span class="text-dark">.text-dark</span>
<span class="text-white bg-dark">.text-white</span>
<span class="text-grey">.text-gray</span>
<span class="text-grey-dark">.text-grey-dark</span>
<span class="text-first">.text-first</span>
<span class="text-second">.text-second</span>
<span class="text-third">.text-third</span>
<span class="text-fourth">.text-fourth</span>
<span class="text-fifth">.text-fifth</span>

{% endexample %}

## Margin

You have the option to set margin sizes from `0-5`. You also have the optional direction using `t,r,b,l,x,y`.

{% example html %}
<div class="d-inline-block bg-first p-2 mr-0">.mr-0</div>
<div class="d-inline-block bg-first p-2 mr-1">.mr-1</div>
<div class="d-inline-block bg-first p-2 mr-2">.mr-2</div>
<div class="d-inline-block bg-first p-2 mr-3">.mr-3</div>
<div class="d-inline-block bg-first p-2 mr-4">.mr-4</div>
<div class="d-inline-block bg-first p-2 mr-5">.mr-5</div>
<div class="d-inline-block bg-first p-2 mx-2">.mx-5</div>
<div class="d-inline-block bg-first p-2 my-2">.my-5</div>
<div class="d-inline-block bg-first p-2 m-2">.m-2</div>
{% endexample %}

## Padding

You have the option to set padding sizes from `0-5`. You also have the optional direction using `t,b,x,y`.

{% example html %}
<div class="d-inline-block bg-first pt-0">.pt-0</div>
<div class="d-inline-block bg-first pt-1">.pt-1</div>
<div class="d-inline-block bg-first pt-2">.pt-2</div>
<div class="d-inline-block bg-first pt-3">.pt-3</div>
<div class="d-inline-block bg-first pt-4">.pt-4</div>
<div class="d-inline-block bg-first pt-5">.pt-5</div>
<div class="d-inline-block bg-first p-3">.p-3</div>
<div class="d-inline-block bg-first px-3">.px-3</div>
<div class="d-inline-block bg-first py-3">.py-3</div>
{% endexample %}


## Display

You can set your display with these utilities.

{% example html %}
<span class="bg-second text-center d-block p-2">.d-block</span>
<span class="bg-third text-center d-inline p-2">.d-inline</span>
<span class="bg-fourth text-center text-white d-inline-block p-2">.d-inline-block</span>
<span class="bg-fifth text-center d-none p-2">.d-none</span>
{% endexample %}

## Borders

With these border utilities you can set common borders.

{% example html %}
<div class="border p-3 mb-3">.border</div>
<div class="border-top p-3 mb-3">.border-top</div>
<div class="border-right p-3 mb-3">.border-right</div>
<div class="border-bottom p-3 mb-3">.border-bottom</div>
<div class="border-left p-3 mb-3">.border-left</div>
{% endexample %}

## Border colors

Add these classes with `.border` and you'll have some common border colors.

{% example html %}
<div class="border p-3 mb-3 border--first">.border--first</div>
<div class="border p-3 mb-3 border--light">.border--light</div>
<div class="border p-3 mb-3 border--second">.border--second</div>
<div class="border p-3 mb-3 border--third">.border--third</div>
<div class="border p-3 mb-3 border--fourth">.border--fourth</div>
<div class="border p-3 mb-3 border--fifth">.border--fifth</div>
<div class="border p-3 mb-3 border--dark">.border--dark</div>
{% endexample %}

## Border width

Add these classes with `.border` to set a different border width.

{% example html %}
<div class="border p-3 mb-3 bw-large">.bw-large</div>
<div class="border p-3 mb-3 bw-small">.bw-small</div>
{% endexample %}

## Border radius

Add these classes with `.border` to set a border radius

{% example html %}
<div class="border p-3 mb-3 br-xsmall">.br-xsmall</div>
<div class="border p-3 mb-3 br-small">.br-small</div>
<div class="border p-3 mb-3 br-normal">.br-normal</div>
<div class="border p-3 mb-3 br-large">.br-large</div>
{% endexample %}
