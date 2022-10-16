const btnCalc = document.querySelector(".btn-calc");
const priceBlock = document.querySelector(".total");
const priceAmount = document.querySelector(".total__amount");
const productPriceEl = document.querySelector(".form__select");
const productAmountEl = document.querySelector(".form__input");
const totalEl = document.querySelector(".total__amount");

btnCalc.addEventListener("click", function () {
  const productPrice = productPriceEl.value; // price of the product choosen
  const productAmount = productAmountEl.value; // amount of products
  const total = productPrice * productAmount;
  totalEl.innerHTML = total;

  if (productPrice != 0 && productAmount > 0) {
    priceBlock.style.display = "block";
  }
});
