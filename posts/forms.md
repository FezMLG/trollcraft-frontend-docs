---
id: forms
title: Forms
layout: docs
category: components
---

# Forms

>CSS file name: **`styles/forms.scss`**


## Simple imput

### Big - 350px

```html
<div class="input-box big">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="" value="Example">
</div>
```
<div class="input-box big">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="" value="Example">
</div>

### Medium - 230px

```html
<div class="input-box medium">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="" value="Example">
</div>
```
<div class="input-box medium">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="" value="Example">
</div>

### Small - 110px

```html
<div class="input-box small">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="" value="Example">
</div>
```
<div class="input-box small">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="" value="Example">
</div>

### Wrong value

```html
<div class="input-box big">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="wrong" value="Example">
  <span class="info">Wprowadzona wartość jest nieprawidłowa<span>
</div>
```
<div class="input-box big">
  <label for="ex1">Text</label>
  <input type="text" name="ex1" class="wrong" value="Example">
  <span class="info">Wprowadzona wartość jest nieprawidłowa<span>
</div>


## Input Group

```html
<div class="input-container">

  <!-- Inputs -->

</div>
```
<div class="input-container">
  <div class="input-box big">
    <label for="ex1">Text</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
  <div class="input-box big">
    <label for="ex1">Text</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
  <div class="input-box big">
    <label for="ex1">Text</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
</div>

## Input Pair (small + medium)

```html
<div class="input-pair">
  <div class="input-box medium">
    <label for="ex1">Medium</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
  <div class="input-box small">
    <label for="ex1">Small</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
</div>
```

<div class="input-pair">
  <div class="input-box medium">
    <label for="ex1">Medium</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
  <div class="input-box small">
    <label for="ex1">Small</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
</div>
<br />
<div class="input-pair">
  <div class="input-box small">
    <label for="ex1">Small</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
  <div class="input-box medium">
    <label for="ex1">Medium</label>
    <input type="text" name="ex1" class="" value="Example">
  </div>
</div>