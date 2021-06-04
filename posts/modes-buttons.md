---
id: modes-buttons
title: Przyciski trybów
layout: docs
category: components
---

## Wersja Mini

W klasie przycisku wpisujemy interesujący nas tryb.

```html
<div class="mode-button mini">
  <button class="freebuild">
    <span class="mode-button-name">Freebuild</span>
  </button>
</div>
```
<div class="mode-button mini">
  <button class="freebuild"><span class="mode-button-name">Freebuild</span></button>
</div>

## Wersja Big

```html
<div class="mode-button big">
  <button class="freebuild">
    <span class="mode-button-name">
      Freebuild
    </span>
    <div class="mode-logo-square">
      <img><!-- W środku <img> umieszczamy ikonę trybu-->
    </div>
  </button>
</div>
```
<div class="mode-button big">
  <button class="freebuild">
    <span class="mode-button-name">
      Freebuild
    </span>
    <div class="mode-logo-square">
      <img>
    </div>
  </button>
</div>


## Kontener na przyciski

```css
.mode-button-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 0 1;
  flex-wrap: wrap;
  gap: 20px;
}
```

```html
<div class="mode-button-container">
  <!-- Dowolony przycisk trybu -->
</div>
```
<div class="mode-button-container">
  <div class="mode-button mini">
    <button class="freebuild"><span class="mode-button-name">Freebuild</span></button>
  </div>
  <div class="mode-button mini">
    <button class="creative"><span class="mode-button-name">Creative</span></button>
  </div>
  <div class="mode-button mini">
    <button class="freebuild"><span class="mode-button-name">Freebuild</span></button>
  </div>
  <div class="mode-button mini">
    <button class="freebuild"><span class="mode-button-name">Freebuild</span></button>
  </div>
</div>

## Wybrany przycisk

Nazwa klasy: **`selected`**

>**Uwaga:**
>
>Klasa `selected`, która podswietla wybrany przycisk, musi znajdować się w divie z klasą `mode-button` nad przyciskiem



```html
<div class="mode-button big selected">
  <button class="freebuild">
    <span class="mode-button-name">
      Freebuild
    </span>
    <div class="mode-logo-square">
      <img>
    </div>
  </button>
</div>
```

<div class="mode-button big selected">
  <button class="freebuild ">
    <span class="mode-button-name">
      Freebuild
    </span>
    <div class="mode-logo-square">
      <img>
    </div>
  </button>
</div>