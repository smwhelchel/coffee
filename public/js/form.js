var data = document.getElementById('delivery-button').addEventListener('click', function(e) {
  e.preventDefault();
  var data = quantity;
  //var data = updatePrice + ', ' + address + ', ' + city + ', ' + state + ', ' + zip;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/cart', true);
  xhr.send(data);
}, false);
