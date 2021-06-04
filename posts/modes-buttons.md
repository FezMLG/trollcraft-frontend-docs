---
id: modes-buttons
title: Mode Buttons
layout: docs
category: components
---

# Mode Buttons

>CSS file name: **`styles/buttons.scss`**

## Mini

```html
<button class="gamemode small">
  <span style="
  color: #885ABC; 
  border-color: #885ABC
  ">Creative</span>
</button>
```
<button class="gamemode small">
  <span style="color: #885ABC; border-color: #885ABC">Creative</span>
</button>

## Icon only

```html
<button class="gamemode">
  <img 
    class="mode-icon" 
    style="background: #885ABC;" 
    src="/images/Block_Green_Stained_Glass.png" 
  />
</button>
```
<button class="gamemode">
  <img 
    class="mode-icon" 
    style="background: #885ABC;" 
    src="/images/Block_Green_Stained_Glass.png" 
  />
</button>

## Big

```html
<button class="gamemode">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
</button>
```
<button class="gamemode">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
</button>

## Mode announcement

```html
<button class="gamemode flare">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
  <div class="announcement"><span>Już wkrótce</span></div>
</button>
```
<button class="gamemode flare">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
  <div class="announcement"><span>Już wkrótce</span></div>
</button>

## Mode beta phase

```html
<button class="gamemode flare">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
  <div class="announcement"><span>Już wkrótce</span></div>
</button>
```
<button class="gamemode flare">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
  <div class="beta"><span>Beta</span></div>
</button>


## Container for small mode

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
<div class="mode-buttons-container">
  <!-- Dowolony mały przycisk trybu -->
</div>
```
<div class="mode-buttons-container">
  <button class="gamemode small">
    <span style="color: #885ABC; border-color: #885ABC">Creative</span>
  </button>
  <button class="gamemode small">
    <span style="color: #885ABC; border-color: #885ABC">Creative</span>
  </button>
  <button class="gamemode small">
    <span style="color: #885ABC; border-color: #885ABC">Creative</span>
  </button>
  <button class="gamemode small">
    <span style="color: #885ABC; border-color: #885ABC">Creative</span>
  </button>
  <button class="gamemode small">
    <span style="color: #885ABC; border-color: #885ABC">Creative</span>
  </button>
</div>

## Selected button

Class name: **`selected`**

```html
<button class="gamemode small selected">
  <span style="color: #885ABC; border-color: #885ABC">Creative</span>
</button>
```

<button class="gamemode small selected">
  <span style="color: #885ABC; border-color: #885ABC">Creative</span>
</button>

<button class="gamemode flare selected">
  <div class="big">
    <span>Creative</span>
    <img 
      class="mode-icon" 
      style="background: #885ABC;" 
      src="/images/Block_Green_Stained_Glass.png" 
    />
  </div>
  <div class="announcement"><span>Już wkrótce</span></div>
</button>