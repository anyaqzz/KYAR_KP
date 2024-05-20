var originalOrder = [];

function saveOriginalOrder() {
  var coffeeContainer = document.querySelector('.div');
  originalOrder = Array.from(coffeeContainer.children);
}

function resetSort() {
  var coffeeContainer = document.querySelector('.div');
  coffeeContainer.innerHTML = '';

  originalOrder.forEach(function(item) {
    coffeeContainer.appendChild(item);
  });
}

function sortByPriceDescending() {
  var coffeeContainer = document.querySelector('.div');
  var coffeeItems = Array.from(coffeeContainer.querySelectorAll('figure'));
  coffeeItems.sort(function(a, b) {
    var priceA = parseFloat(a.querySelector('p:nth-of-type(2)').innerText.replace(' byn', '').replace(',', '.'));
    var priceB = parseFloat(b.querySelector('p:nth-of-type(2)').innerText.replace(' byn', '').replace(',', '.'));
    return priceB - priceA;
  });
  coffeeItems.forEach(function(item) {
    coffeeContainer.appendChild(item);
  });
}

function sortByPriceAscending() {
  var coffeeContainer = document.querySelector('.div');
  var coffeeItems = Array.from(coffeeContainer.querySelectorAll('figure'));
  coffeeItems.sort(function(a, b) {
    var priceA = parseFloat(a.querySelector('p:nth-of-type(2)').innerText.replace(' byn', '').replace(',', '.'));
    var priceB = parseFloat(b.querySelector('p:nth-of-type(2)').innerText.replace(' byn', '').replace(',', '.'));
    return priceA - priceB;
  });
  coffeeItems.forEach(function(item) {
    coffeeContainer.appendChild(item);
  });
}

window.onload = function() {
  saveOriginalOrder();
};
