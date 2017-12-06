---
layout: page
title: Forms
---

## Simple input

use the `.input` class to have a simple input. It works well with a button.


{% example html %}
<input placeholder="enter your text" class="input"/>
<a href="#" class="button">OK</a>
{% endexample %}

You can use a smaller version with the `.input--small` modifier.

{% example html %}
<input placeholder="enter your text" class="input input--small"/>
<a href="#" class="button button--small">OK</a>
{% endexample %}

You can use `.input--short` modifier to shorten the length of the input.

{% example html %}
<input placeholder="enter your text" class="input input--small input--short"/>
<a href="#" class="button button--small">OK</a>
{% endexample %}

If you want full width forms, you can use `.input--full` modifier.

{% example html %}
<input placeholder="enter your text" class="input input--full"/>
<a href="#" class="button button--full">OK<i class="fa fa-chevron-right"></i></a>
{% endexample %}

## Search input

If you want a search input, you can use `.search-container` as a wrapper for your `input`.

{% example html %}
<div class="search-container">
  <input placeholder="enter your text" class="input"/>
</div>
<div class="search-container">
  <input placeholder="enter your text" class="input input--small"/>
</div>
{% endexample %}
