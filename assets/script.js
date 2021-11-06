// /********************Elements*********************************/
// /****************************************************************/
// const body = document.querySelector('body');
// const main = document.querySelector('main');
const cart = document.querySelector('.cart');
const cartIcon = document.querySelector('.cart-icon');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const amountText = document.querySelector('.amount-text');
const addCartButt = document.querySelector('.add-to-card');
const price = document.querySelector('.price-off');
const deleteButt = document.querySelector('.delete-icon');
const cartApprove = document.querySelector('.cart-approve');
const cartItem = document.querySelector('.cart-item');
const cartNum = document.querySelector('.cart-num');

const thumbs = document.querySelectorAll('.thumbnail');
const mainPic = document.querySelector('.main-pic');

const closePopUp = document.querySelector('.close-butt');
const popUp = document.querySelector('.popUP');

const menu = document.querySelector('.menu-icon');
const closeResNav = document.querySelector('.close-butt2');
const responsiveNav = document.querySelector('.responsive-nav');

let amount = 0;
/****************************************************************/
/****************************************************************/
/****************************************************************/
/****************************************************************/
cartIcon.addEventListener('click', () => {
  cart.classList.contains('cart-show')
    ? cart.classList.remove('cart-show')
    : cart.classList.add('cart-show');
});
plus.addEventListener(
  'click',
  () => (amountText.value = +amountText.value + 1)
);
minus.addEventListener(
  'click',
  () => (amountText.value = +amountText.value <= 0 ? 0 : +amountText.value - 1)
);
addCartButt.addEventListener('click', function () {
  const nPrice = +price.textContent.substr(1);
  amount += +amountText.value;
  const finalPrice = nPrice * amount;

  const option = {
    style: 'currency',
    currency: 'USD',
  };
  const formattedPrice = new Intl.NumberFormat('en-US', option).format(nPrice);
  const formattedFinalPrice = new Intl.NumberFormat('en-US', option).format(
    finalPrice
  );
  cartApprove.innerHTML = ``;
  cartApprove.innerHTML = `
	<img src="assets/images/image-product-1.jpg" alt="" width="50px" />
	<div class="cart-item">
	  <span class="fs12"
		>Fall Limited Edition Sneakers <br />
		${formattedPrice} * ${amount} <span class="marL16 bolder fs14 final-price">${formattedFinalPrice}</span>
	  </span>
	</div>
	<div class="checkout marT16">
	  <span class="bold fs16 checkout-text">Checkout</span>`;
  cartNum.style.display = 'block';
  cartNum.innerHTML = `${amount}`;
});

deleteButt.addEventListener('click', function () {
  cartApprove.innerHTML = `<span class="fs14 bold marT40 marR24 cart-item">Your cart is empty</span>`;
  amount = 0;
  cartNum.style.display = 'none';
});

thumbs.forEach(thumb => {
  const src = thumb.src.substr(0, thumbs[0].src.length - 14).concat('.jpg');
  const color = `hsl(26, 100%, 55%)`;
  thumb.addEventListener('click', function () {
    mainPic.src = src;
    thumbs.forEach(thumb => {
      if (thumb.style.border === `2px solid orangered`) {
        thumb.style.border = 'none';
        thumb.style.opacity = '1';
      }
    });
    thumb.style.border = `2px solid orangered`;
    thumb.style.opacity = '0.5';
  });
});
mainPic.addEventListener('click', function () {
  popUp.style.display = 'block';
});
closePopUp.addEventListener('click', function () {
  popUp.style.display = 'none';
});

menu.addEventListener('click', function () {
  responsiveNav.style.left = '-100px';
});
closeResNav.addEventListener('click', function () {
  responsiveNav.style.left = '-300px';
});

/****************************************************************/
/****************************************************************/
// // PICTURE CAROUSEL
let bool = true;
let slideIndex = 1;

showSlides1(slideIndex);

// // // Next/previous controls
const prevs = document.querySelectorAll('.prev');
const nexes = document.querySelectorAll('.next');

prevs.forEach(prev =>
  prev.addEventListener('click', function plusSlides() {
    bool = false;
    showSlides1((slideIndex -= 1));
  })
);
nexes.forEach(next =>
  next.addEventListener('click', function plusSlides() {
    bool = false;
    showSlides1((slideIndex -= 1));
  })
);

function showSlides1(n) {
  const slides1 = document.querySelectorAll('.mySlides');
  const slides2 = document.querySelectorAll('.mySlides2');
  let i;
  if (n > slides1.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides1.length;
  }

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = 'none';
    slides2[i].style.display = 'none';
  }

  slides1[slideIndex - 1].style.display = slides2[
    slideIndex - 1
  ].style.display = 'block';

  if (bool === true) {
    slideIndex++;
    if (slideIndex > slides1.length) {
      slideIndex = 1;
    }
  }
}

// // PICTURE CAROUSEL END
