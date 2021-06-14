---
id: forms
title: Forms
layout: docs
category: components
---

# Forms

>CSS file name: **`styles/forms.scss`**


## Simple input

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

### Input with button

```html
<div class="input-box big with-button">
  <input type="text" name="ex1" value="Example">
  <button class="icon primary">
    <i class="icon back"></i>
  </button>
</div>
```

<div class="input-box big with-button">
  <input type="text" name="ex1" value="Example">
  <button class="icon primary">
    <i class="icon back"></i>
  </button>
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

## Choose between

```html
<div class="buttons-group choosing">
  <button class="standard selected">Opcja 1</button>
  <button class="standard">Opcja 2</button>
  <button class="standard">Opcja 3</button>
</div>
```
<div class="buttons-group choosing">
  <button class="standard selected">Opcja 1</button>
  <button class="standard">Opcja 2</button>
  <button class="standard">Opcja 3</button>
</div>

<div class="buttons-group choosing">
  <button class="standard selected">Opcja 1</button>
  <button class="standard">Opcja 2</button>
  <button class="standard">Opcja 3</button>
</div>