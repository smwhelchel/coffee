//showing menu items after click of menu navigation icon
var myMenu = document.getElementById('menu-nav')
var menuContainer = document.getElementById('menu-populate')
myMenu.addEventListener('click', function() {
  menuContainer.className = 'show';
});

//appending menu items to DOM
function menuItem(name, cap, img, pricing, id) {

  var menuColumn = document.createElement('div');
  menuColumn.setAttribute('class', 'col-sm-3 col-md-3 show-menu');

  var thumbnail = document.createElement('div');
  thumbnail.setAttribute('class', 'thumbnail');

  var image = document.createElement('img');
  image.setAttribute('src', img);

  var caption = document.createElement('div');
  caption.setAttribute('class', 'caption');
  caption.textContent = cap;

  var hElement = document.createElement('h3');
  hElement.textContent = name;
  
  var price = document.createElement('h5');
  price.textContent = "$" +pricing;

  var button = document.createElement('button');
  button.setAttribute('data-target', '#' + id);
  button.setAttribute('data-toggle', 'modal');
  var text = document.createTextNode('Buy now');
  button.setAttribute('class', 'btn btn-default menu-button');

  button.appendChild(text);
  hElement.appendChild(button);
  caption.appendChild(price);
  caption.appendChild(hElement)
  thumbnail.appendChild(image);
  thumbnail.appendChild(caption);
  menuColumn.appendChild(thumbnail);

  document.getElementById('menu-row').appendChild(menuColumn);
}

function createModal(name, id, price, img) {
  
  var modal = document.createElement('div');
  modal.setAttribute('id', id);
  modal.setAttribute('class', 'modal fade');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');
  
  var modalDialog = document.createElement('div');
  modalDialog.setAttribute('class', 'modal-dialog');
  
  var modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  modalContent.setAttribute('id', 'modal-content ' + id);
  
  var modalHeader = document.createElement('div');
  modalHeader.setAttribute('class', 'modal-header');
  
  var modalButton = document.createElement('button');
  modalButton.setAttribute('type', 'button');
  modalButton.setAttribute('class', 'close');
  modalButton.setAttribute('data-dismiss', 'modal');
  modalButton.setAttribute('aria-label', 'close');
  
  var span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  
  var header = document.createElement('h4');
  header.setAttribute('class', 'modal-title');
  header.setAttribute('id', 'order-header');
  header.textContent = 'Place Order:';
  
  var modalBody = document.createElement('div');
  modalBody.setAttribute('class', 'modal-body');
  
  //name of drink
  var pElement = document.createElement('p');
  pElement.textContent = "Your Cart: " + name;

  //price of drink
  var priceDrink = document.createElement('p');
  priceDrink.setAttribute('id', 'price-drink');
  priceDrink.textContent = '$' + price + ' x ';

  var updatePrice = document.createElement('text');
  updatePrice.setAttribute('id', 'update-price');
  updatePrice.textContent = ' = $0.00';

  var quantityData = document.createElement('input');
  quantityData.setAttribute('type', 'text');
  quantityData.setAttribute('id', 'quantity-data');
  quantityData.setAttribute('size', '8');
  quantityData.setAttribute('placeholder', "Quantity");
  var quantityLineBreak = document.createElement('br');

  //calculate price based on quantity
  quantityData.addEventListener('input', function() {
    var getQuantity = parseInt(quantityData.value);
    var newPrice = price * quantityData.value;
    parsedPrice = parseFloat(newPrice).toFixed(2);
    updatePrice.textContent = " = $" + parsedPrice;
    updatePrice.setAttribute('data-price', parsedPrice);
  })

  var fieldset = document.createElement('fieldset');
  fieldset.setAttribute('id', 'fieldset');

  var quantity = document.createElement('form');
  quantity.setAttribute('id', id + '-form');
  quantity.style.display = 'block';

  var userName = document.createElement('input');
  userName.setAttribute('type', 'text');
  userName.setAttribute('id', 'user-name');
  userName.setAttribute('size', '50');
  var userLineBreak = document.createElement('br');

  var labelName = document.createElement('label');
  labelName.setAttribute('id', 'name-label');
  labelName.setAttribute('for', 'user-name');
  labelName.textContent = 'Name:';

  var address = document.createElement('input');
  address.setAttribute('id', 'address');
  address.setAttribute('type', 'text');
  address.setAttribute('size', '50');
  var addressLineBreak = document.createElement('br');

  var labelAddress = document.createElement('label');
  labelAddress.setAttribute('id', 'address-label');
  labelAddress.setAttribute('for', 'address');
  labelAddress.textContent = 'Address:';

  var city = document.createElement('input');
  city.setAttribute('id', 'city');
  city.setAttribute('type', 'text');
  city.setAttribute('size', '21');
  var cityLineBreak = document.createElement('br');

  var labelCity = document.createElement('label');
  labelCity.setAttribute('id', 'city-label');
  labelCity.setAttribute('for', 'city');
  labelCity.textContent = 'City:';  

  var state = document.createElement('input');
  state.setAttribute('id', 'state');
  state.setAttribute('type', 'text');
  state.setAttribute('size', '2');

  var labelState = document.createElement('label');
  labelState.setAttribute('id', 'state-label');
  labelState.setAttribute('for', 'state');
  labelState.textContent = 'State:';

  var zip = document.createElement('input');
  zip.setAttribute('id', 'zip');
  zip.setAttribute('type', 'text');
  zip.setAttribute('size', '5');

  var labelZip = document.createElement('label');
  labelZip.setAttribute('id', 'zip-label');
  labelZip.setAttribute('for', 'zip');
  labelZip.textContent = 'Zip Code:';

  var deliveryLabel = document.createElement('label');
  deliveryLabel.setAttribute('id', 'delivery-cost');
  deliveryLabel.setAttribute('for', 'delivery-label');
  deliveryLabel.textContent = 'Delivery Cost:';
  var deliveryLineBreak = document.createElement('br');

  var labelTotal = document.createElement('label');
  labelTotal.setAttribute('id', 'total-label');
  labelTotal.setAttribute('for', 'total');
  labelTotal.textContent = 'Total:';
  var totalLineBreak = document.createElement('br');

  var payment = document.createElement('text');
  payment.setAttribute('id', 'payment');
  payment.textContent = 'Payment forms accepted upon delivery: ';
  var paymentLineBreak = document.createElement('br');

  var visa = document.createElement('i');
  visa.setAttribute('class', 'fa fa-cc-visa fa-2x');
  visa.setAttribute('id', 'visa');

  var mastercard = document.createElement('i');
  mastercard.setAttribute('class', 'fa fa-cc-mastercard fa-2x');
  mastercard.setAttribute('id', 'mastercard');

  var money = document.createElement('i');
  money.setAttribute('class', 'fa fa-money fa-2x');
  money.setAttribute('id', 'money');

  var modalFooter = document.createElement('div');
  modalFooter.setAttribute('class', 'modal-footer');

  var deliveryButton = document.createElement('button');
  deliveryButton.setAttribute('type', 'submit');
  deliveryButton.setAttribute('class', 'btn btn-primary');
  deliveryButton.setAttribute('id', 'delivery-button');
  deliveryButton.textContent = 'Calculate Delivery Cost';
  
  //place order button
  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.setAttribute('id', id + '-order-button');
  button.setAttribute('class', 'btn btn-default order-button');
  button.setAttribute('data-dismiss', 'modal');
  button.textContent = 'Place Order';

  var body = document.body;

  modalFooter.appendChild(button);
  modalBody.appendChild(fieldset);
  fieldset.appendChild(quantity);
  quantity.appendChild(pElement);
  quantity.appendChild(priceDrink);
  priceDrink.appendChild(quantityData);
  priceDrink.appendChild(updatePrice); 
  quantity.appendChild(labelName);
  labelName.appendChild(userName);
  quantity.appendChild(addressLineBreak);
  quantity.appendChild(labelAddress);
  labelAddress.appendChild(address);
  quantity.appendChild(cityLineBreak);
  quantity.appendChild(labelCity);
  labelCity.appendChild(city);
  quantity.appendChild(labelState);
  labelState.appendChild(state);
  quantity.appendChild(labelZip);
  labelZip.appendChild(zip);
  fieldset.appendChild(deliveryLineBreak);
  quantity.appendChild(deliveryButton);
  fieldset.appendChild(deliveryLabel);
  fieldset.appendChild(totalLineBreak);
  fieldset.appendChild(labelTotal);
  fieldset.appendChild(paymentLineBreak);
  fieldset.appendChild(payment);
  fieldset.appendChild(visa);
  fieldset.appendChild(mastercard);
  fieldset.appendChild(money);
  modalHeader.appendChild(modalButton);
  modalHeader.appendChild(header);
  modalHeader.appendChild(modalButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  body.appendChild(modal);

var submitPrice = document.getElementById(id + '-form');
submitPrice.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('found');
  myObject = {};
  myObject['quantity'] = submitPrice.getElementsByTagName('input')[0].value;
  myObject['name'] = submitPrice.getElementsByTagName('input')[1].value;
  myObject['address'] = submitPrice.getElementsByTagName('input')[2].value;
  myObject['city'] = submitPrice.getElementsByTagName('input')[3].value;
  myObject['state'] = submitPrice.getElementsByTagName('input')[4].value;
  myObject['zip'] = submitPrice.getElementsByTagName('input')[5].value;
  var xhr = new XMLHttpRequest();
  var objectString = JSON.stringify(myObject);
  xhr.open('POST', 'http://localhost:1337/post', true);
  xhr.addEventListener('load', function() {
   var response = xhr.responseText;
   var newResponse = Number(response);
   var deliveryCost = document.createElement('text');
   deliveryCost.setAttribute('id', id + '-delivery-cost');
   deliveryCost.textContent = ' $' + newResponse;
   deliveryLabel.appendChild(deliveryCost);
   console.log(deliveryCost);
   var quantityTotal = submitPrice.getElementsByTagName('text')[0].getAttribute('data-price');
   var theTotal = 'Total: $' + (newResponse + Number(quantityTotal)).toFixed(2);
   console.log(submitPrice.getElementsByTagName('text'));
   labelTotal.textContent = theTotal;
 });

  xhr.setRequestHeader('Content-Type', 'application/JSON');
  xhr.send(objectString);
  console.log(objectString);
}, false);

var orderButton = document.getElementById(id + '-order-button');
orderButton.addEventListener('click', function() {
  var submitNow = document.getElementById('modal-content');
  var lineBreak = document.createElement('br');
  var newDiv = ('Thank you for your order. It will be arriving shortly!');
  modalContent.setAttribute('id', id + '-new');
  modalContent.setAttribute('data-img-url', 'http://ilovecoffee.co.za/wp-content/uploads/2012/02/ilcr-banner.jpg');
  modalContent.textContent = newDiv;
})
}

//populating menu items using json file
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {
    var menuObject = JSON.parse(xhr.responseText);
    for (i=0; i<menuObject.drinks.length; i++) {
      var menuData = menuObject.drinks[i];
      var id = menuData.name;
      id = id.replace(/\s+/g, '-').toLowerCase();
      
      menuItem(menuData.name, menuData.caption, menuData.image, menuData.price, id);
      createModal(menuData.name, id, menuData.price);

    }
  }
}; 
xhr.open('GET', '/js/menu.json', true)
xhr.send(null);
