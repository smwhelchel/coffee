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
  price.textContent = pricing;

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
  
  var pElement = document.createElement('p');
  pElement.textContent = name;

  var quantity = document.createElement('form');

  var quantitySelection = document.createElement('select');

  /*var label = document.createElement('label');
  label.setAttribute('for', quantityNumber1);
  label.textContent = 'Quantity:';*/

  var quantityNumber1 = document.createElement('option');
  quantityNumber1.textContent = '';

  var quantityNumber2 = document.createElement('option');
  quantityNumber2.textContent = '1';

  var quantityNumber3 = document.createElement('option');
  quantityNumber3.textContent = '2';

  var quantityNumber4 = document.createElement('option');
  quantityNumber4.textContent = '3';

  var quantityNumber5 = document.createElement('option');
  quantityNumber5.textContent = '4';

  var priceDrink = document.createElement('p');
  priceDrink.textContent = price;

  var userName = document.createElement('input');
  userName.setAttribute('type', 'text');
  userName.textContent = 'Name';
  
  var modalFooter = document.createElement('div');
  modalFooter.setAttribute('class', 'modal-footer');

  var deliveryButton = document.createElement('button');
  deliveryButton.setAttribute('type', 'button');
  deliveryButton.setAttribute('class', 'btn btn-primary');
  deliveryButton.textContent = 'Calculate Delivery Cost';
  
  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('class', 'btn btn-default');
  button.setAttribute('data-dismiss', 'modal');
  button.textContent = 'Place Order';

  var body = document.body;

  modalFooter.appendChild(deliveryButton);
  modalFooter.appendChild(button);
  modalBody.appendChild(pElement);
  modalBody.appendChild(quantity);
  quantity.appendChild(quantitySelection);
  quantitySelection.appendChild(quantityNumber1);
  quantitySelection.appendChild(quantityNumber2);
  quantitySelection.appendChild(quantityNumber3);
  quantitySelection.appendChild(quantityNumber4);
  quantitySelection.appendChild(quantityNumber5);
  modalBody.appendChild(userName);
  modalBody.appendChild(priceDrink);
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





