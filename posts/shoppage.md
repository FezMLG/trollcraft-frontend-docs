---
id: shoppage
title: Shop page
layout: docs
category: page
---

# Shop Page Components

## Product look

```html
<div class="product">
  <div class="product-image-box">
      <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>  </div>
  <div class="product-name-box">
    <span class="gamemode" style="color: #418D24;">Freebuild</span>
    <span class="name">Ranga VIP na 30 dni</span>
  </div>
  <div class="product-buy-box">
    <span class="price">15 zł</span>
    <button class="small">Kup teraz</button> 
  </div>
</div>
```

<div class="product">
  <div class="product-image-box">
      <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>  </div>
  <div class="product-name-box">
    <span class="gamemode" style="color: #418D24;">Freebuild</span>
    <span class="name">Ranga VIP na 30 dni</span>
  </div>
  <div class="product-buy-box">
    <span class="price">15 zł</span>
    <button class="small">Kup teraz</button> 
  </div>
</div>

## Product container

```html
<div class="product-container">

  <!-- product goes here -->

</div>
```
<div class="product-container">
  <div class="product">
    <div class="product-image-box">
      <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>    </div>
    <div class="product-name-box">
      <span class="gamemode" style="color: #418D24;">Freebuild</span>
      <span class="name">Ranga VIP na 30 dni</span>
    </div>
    <div class="product-buy-box">
      <span class="price">15 zł</span>
      <button class="small">Kup teraz</button> 
    </div>
  </div>
  <div class="product">
    <div class="product-image-box">
      <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>    </div>
    <div class="product-name-box">
      <span class="gamemode" style="color: #418D24;">Freebuild</span>
      <span class="name">Ranga VIP na 30 dni</span>
    </div>
    <div class="product-buy-box">
      <span class="price">15 zł</span>
      <button class="small">Kup teraz</button> 
    </div>
  </div>
  <div class="product">
    <div class="product-image-box">
      <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>
    </div>
    <div class="product-name-box">
      <span class="gamemode" style="color: #418D24;">Freebuild</span>
      <span class="name">Ranga VIP na 30 dni</span>
    </div>
    <div class="product-buy-box">
      <span class="price">15 zł</span>
      <button class="small">Kup teraz</button> 
    </div>
  </div>
  <div class="product">
    <div class="product-image-box">
      <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>
    </div>
    <div class="product-name-box">
      <span class="gamemode" style="color: #418D24;">Freebuild</span>
      <span class="name">Ranga VIP na 30 dni</span>
    </div>
    <div class="product-buy-box">
      <span class="price">15 zł</span>
      <button class="small">Kup teraz</button> 
    </div>
  </div>
</div>

## Number of items on page

<div class="number-of-items-box">
  <select>
    <option>20</option>
    <option>30</option>
    <option>50</option>
    <option>100</option>
  </select>
  <span>wyników na stronie</span>
</div>

## Page Selector

<div class="pagination-box">
  <button class="icon">
    <i class="icon next"></i>
  </button>
  <div class="page-list">
    <a href="#" class="link">1</a>
    <a href="#" class="link current">2</a>
    <a href="#" class="link">3</a>
    <input type="number" class="page-type" placeholder="..." max="99" min="0"/>
    <a href="#" class="link">10</a>
  </div>
  <button class="icon">
    <i class="icon back"></i>
  </button>
</div>

# Product page

## Title

<div class="product-header-box">
  <div class="image-box">
    <img class="image" src="/images/engineering_black_24dp.svg" alt="product image"/>  </div>
  <div class="title">
    <span class="dimmed">Wszystkie tryby</span>
    <h2>Ranga SVIP na 30 dni</h2>
    <span class="dimmed">kod TC: <span>218651</span></span>
  </div>

</div>

## Select and price

<div class="product-cta-box">
  <div class="flex-column">
    <span class="just-text">Długość</span>
    <div class="product-option-box">
      <button class="option current"><span class="option-title">30 dni</span></button>
      <button class="option"><span class="option-title">14 dni</span><span class="option-price"><span>-5,00</span>zł</span></button>
      <button class="option"><span class="option-title">7 dni</span><span class="option-price"><span>-6,00</span>zł</span></button>
    </div>
  </div>
  <div class="price-box">
    <div class="price">
      <span class="old"><span>14,99</span>zł</span>
      <span class="new"><span>10,99</span>zł</span>
    </div>
    <span class="saving">Oszczędzasz, aż<span> 4 </span>zł!</span>
  </div>
  <button class="standard primary">
    <span>Przejdź do koszyka</span>
    <i class="icon back"></i>
  </button>
</div>