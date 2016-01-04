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




