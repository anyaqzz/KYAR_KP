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
    var priceA = parseFloat(a.querySelector('p.podpic').innerText.replace(' byn', '').replace('/', '.').replace(',', '.'));
    var priceB = parseFloat(b.querySelector('p.podpic').innerText.replace(' byn', '').replace('/', '.').replace(',', '.'));
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
    var priceA = parseFloat(a.querySelector('p.podpic').innerText.replace(' byn', '').replace('/', '.').replace(',', '.'));
    var priceB = parseFloat(b.querySelector('p.podpic').innerText.replace(' byn', '').replace('/', '.').replace(',', '.'));
    return priceA - priceB;
  });
  coffeeItems.forEach(function(item) {
    coffeeContainer.appendChild(item);
  });
}

window.onload = function() {
  saveOriginalOrder();
};
