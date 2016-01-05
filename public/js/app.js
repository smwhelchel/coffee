//showing menu items after click of menu navigation icon
var myMenu= document.getElementById('menu-nav')
var menuContainer= document.getElementById('menu-populate')
myMenu.addEventListener('click', function() { menuContainer.className='show'})


//populating menu items using json file
var xhr= new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {
    var menuObject = JSON.parse(xhr.responseText);

    console.log(menuObject.drinks[0]);
    for (i=0; i<menuObject.drinks.length; i++) {
      var menuData = menuObject.drinks[i];
      console.log(menuData);
      var menuColumn= document.createElement('div');
      menuColumn.setAttribute('class', 'col-sm-3 col-md-3 show-menu');
      var thumbnail= document.createElement('div');
      thumbnail.setAttribute('class', 'thumbnail');
      var image= document.createElement('img');
      image.setAttribute('src', menuObject.drinks[i].image);
      var caption= document.createElement('div');
      caption.setAttribute('class', 'caption');
      caption.textContent=menuObject.drinks[i].caption;
      var hElement= document.createElement('h3');
      hElement.textContent= menuObject.drinks[i].name;
      var button= document.createElement('button');
      var text= document.createTextNode('Buy now');
      button.setAttribute('class', 'btn btn-default menu-button');
      button.appendChild(text);
      hElement.appendChild(button);
      caption.appendChild(hElement)
      thumbnail.appendChild(image);
      thumbnail.appendChild(caption);
      menuColumn.appendChild(thumbnail);
      document.getElementById('menu-row').appendChild(menuColumn);
    }
  }
}; 
xhr.open('GET', '/js/menu.json', true)
xhr.send(null);

/*var xhr= new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if (xhr.readyState==4) {
    var menuItems = JSON.parse(xhr.responseText);
  }
  console.log(menuItems.drinks[0]);
  for (i=0; i<menuObject.drinks.length; i++) {
    var id = menuItems.name[i];
    id=id.replace(/\s+/g, '-').toLowerCase();
    coffeeThumbnail(name, price)
    openModal(id, menuItems.drinks[i].name, menuItems.drinks[i].price);
}

//Order form Modal
var openModal= function(name, id, price) {
  var modal= document.createElement('div');
  modal.setAttribute('class', 'modal fade');
  modal.setAttribute('tabindex', '-1');
  modal.setAttribute('role', 'dialog');
  var modalDialog= document.createElement('div');
  modalDialog.setAttribute('class', 'modal-dialog');
  var modalContent= document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  var modalHeader=document.createElement('div');
  modalHeader.setAttribute('class', 'modal-header');
  var modalButton=document.createElement('button');
  modalButton.setAttribute('type', 'button');
  modalButton.setAttribute('class', 'close');
  modalButton.setAttribute('data-dismiss', 'modal');
  modalButton.setAttribute('aria-label', 'close');
  var span=document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  var header=document.createElement('h4');
  header.setAttribute('class', 'modal-title');
  var modalBody= document.createElement('div');
  modalBody.setAttribute('class', 'modal-body');
  var pElement= document.createElement('p');
  var modalFooter=document.createElement('div');
  modalFooter.setAttribute('class', 'modal-footer');
  var button=document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('class', 'btn btn-default');
  button.setAttribute('data-dismiss', 'modal');
  modalFooter.appendChild('button');
  modalBody.appendChild('pElement');
  modalHeader.appendChild('header');
  modalHeader.appendChild('modalButton');
  modalContent.appendChild('modalHeader');
  modalDialog.appendChild('modalContent');
  modal.appendChild('modalDialog');
  body.appendChild('modal');
};*/

/*console.log(menuObject.drinks[0]);
    for (i=0; i<menuObject.drinks.length; i++) {
      var id = '';
      coffeeThumbnail(name, price)
      openModal(id, menuObject.drinks[i].name, menuObject.drinks[i].price);

myModal(id, price, name)
*/
















