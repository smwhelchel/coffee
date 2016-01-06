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

//create modal
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
  header.textContent = 'Place Order:';
  
  var modalBody = document.createElement('div');
  modalBody.setAttribute('class', 'modal-body');
  
  //name of drink
  var pElement = document.createElement('p');
  pElement.textContent = name;

  //price of drink
  var priceDrink = document.createElement('p');
  priceDrink.textContent = price + " x ";

  var updatePrice = document.createElement('text');
  updatePrice.setAttribute('id', 'update-price');

  var quantityData = document.createElement('input');
  quantityData.setAttribute('type', 'text');
  quantityData.setAttribute('id', 'quantity-data');
  quantityData.setAttribute('size', '3');
  quantityData.setAttribute('maxlength', '99');
  var quantityLineBreak = document.createElement('br');

  quantityData.addEventListener('input', function() {
    console.log(price);
    console.log(quantityData.value);
    var getQuantity = parseInt(quantityData.value);
    var newPrice = price * quantityData.value;
    parsedPrice = parseFloat(newPrice).toFixed(2);
    updatePrice.textContent = " = $" + parsedPrice;
  })

  var fieldset = document.createElement('fieldset');

  var quantity = document.createElement('form');
  quantity.setAttribute('id', 'form')
  quantity.style.display = 'block';

  var userName = document.createElement('input');
  userName.setAttribute('type', 'text');
  userName.setAttribute('id', 'user-name');
  var userLineBreak = document.createElement('br');

  var labelName = document.createElement('label');
  labelName.setAttribute('id', 'name-label');
  labelName.setAttribute('for', 'user-name');
  labelName.textContent = 'Name:';

  var address = document.createElement('input');
  address.setAttribute('id', 'address');
  address.setAttribute('type', 'text');
  var addressLineBreak = document.createElement('br');

  var labelAddress = document.createElement('label');
  labelAddress.setAttribute('id', 'address-label');
  labelAddress.setAttribute('for', 'address');
  labelAddress.textContent = 'Address:';

  var city = document.createElement('input');
  city.setAttribute('id', 'city');
  city.setAttribute('type', 'text');
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

  var labelTotal = document.createElement('label');
  labelTotal.setAttribute('id', 'total-label');
  labelTotal.textContent = 'Total:';
  var totalLineBreak = document.createElement('br');

  var modalFooter = document.createElement('div');
  modalFooter.setAttribute('class', 'modal-footer');

  var deliveryButton = document.createElement('button');
  deliveryButton.setAttribute('type', 'button');
  deliveryButton.setAttribute('class', 'btn btn-primary');
  deliveryButton.textContent = 'Calculate Delivery Cost';
  
  //place order button
  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('class', 'btn btn-default');
  button.setAttribute('data-dismiss', 'modal');
  button.textContent = 'Place Order';

  var body = document.body;

  modalFooter.appendChild(deliveryButton);
  modalFooter.appendChild(button);
  modalBody.appendChild(pElement);
  modalBody.appendChild(priceDrink);
  modalBody.appendChild(fieldset);
  fieldset.appendChild(quantity);
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
  quantity.appendChild(totalLineBreak);
  fieldset.appendChild(labelTotal);
  modalHeader.appendChild(modalButton);
  modalHeader.appendChild(header);
  modalHeader.appendChild(modalButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  body.appendChild(modal);

}

//populating menu items using json file
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {
    var menuObject = JSON.parse(xhr.responseText);
    for (i=0; i<menuObject.drinks.length; i++) {
      var menuData = menuObject.drinks[i];
      console.log(menuData.image);
      var id = menuData.name;
      id = id.replace(/\s+/g, '-').toLowerCase();
      
      menuItem(menuData.name, menuData.caption, menuData.image, menuData.price, id);
      createModal(menuData.name, id, menuData.price);

    }
  }
}; 
xhr.open('GET', '/js/menu.json', true)
xhr.send(null);





