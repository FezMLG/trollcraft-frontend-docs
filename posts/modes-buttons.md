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
  <button class="freebuild">Freebuild</button>
</div>
```
<div class="mode-button mini">
  <button class="freebuild">Freebuild</button>
</div>

## Wersja Big

<style>



</style>

```html
<div class="mode-button big">
  <button class="freebuild">
    <div class="mode-button-name">
      <span>Freebuild</span>
    </div>
    <div class="mode-logo-square">
      <img>
    </div>
  </button>
</div>
```
<div class="mode-button big">
  <button class="freebuild">
    <div class="mode-button-name">
      <span>Freebuild</span>
    </div>
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
    <button class="freebuild">Freebuild</button>
  </div>
  <div class="mode-button mini">
    <button class="freebuild">Freebuild</button>
  </div>
  <div class="mode-button mini">
    <button class="freebuild">Freebuild</button>
  </div>
  <div class="mode-button mini">
    <button class="freebuild">Freebuild</button>
  </div>
</div>