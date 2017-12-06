---
layout: page
title: Buttons
---

Buttons are used for actions

## Default buttons

Standard buttons using `.button` for form actions and page actions.

{% example html %}
<button class="button" type="button">Button button</button>
<a class="button" href="#" role="button">Link button</a>
{% endexample %}

You can use a smaller version with the `.button--small` modifier.

{% example html %}
<a class="button" href="#" role="button">Button</a>
<a class="button button--small" href="#" role="button">Small button</a>
{% endexample %}

You can use a full width version with the `.button--full` modifier.

{% example html %}
<a class="button button--full" href="#" role="button">Button</a>
{% endexample %}

## Other buttons

You can use these buttons for different type of actions, or for a specified theme page

{% example html %}
<div class="p-2">
  <a class="button button--second" href="#" role="button">Button</a>
  <a class="button button--small button--second" href="#" role="button">Small button</a>
</div>
<div class="p-2">
  <a class="button button--third" href="#" role="button">Button</a>
  <a class="button button--small button--third" href="#" role="button">Small button</a>
</div>
<div class="p-2">
  <a class="button button--fourth" href="#" role="button">Button</a>
  <a class="button button--small button--fourth" href="#" role="button">Small button</a>
</div>
<div class="p-2">
  <a class="button button--fifth" href="#" role="button">Button</a>
  <a class="button button--small button--fifth" href="#" role="button">Small button</a>
</div>
{% endexample %}

## FontAwesome icons

By default you can add a FontAwesome icon before the text of the button.
The only exception is the `.fa-chevron-right` icon that you can put at the end of a button.

{% example html %}
<button class="button" type="button"><i class="fa fa-home"></i>Button button</button>
<a class="button" href="#" role="button">Link button<i class="fa fa-chevron-right"></i></a>
{% endexample %}

## Disabled buttons

To disable a button, you can use the `.button--disabled` or the html attribute `disabled`.

{% example html %}
<button class="button button--small button--second" type="button" disabled>disabled small button</button>
<a class="button button--fourth button--disabled" href="#" role="button">disabled button</a>
{% endexample %}
