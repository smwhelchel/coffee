// var menu= document.getElementById('menu-nav');
// menu.addEventListener('click', function() {
  // fs.readFile ('menu.json', function loadJSON() {
  //   var jsonFile='/menu.json';
    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState==4) {
        var menuObject = JSON.parse(xhr.responseText);
        // document.getElementById("name").textContent;
        // document.getElementById("price").textContent;
        console.log(menuObject.drinks[0]);
        for (i=0; i<menuObject.drinks.length; i++) {
          var menuData = menuObject.drinks[i];
          console.log(menuData);
          var menuColumn= document.createElement('div');
          menuColumn.setAttribute('class', 'col-sm-3 col-md-3');
          menuColumn.setAttribute('id', 'show-menu');
          var thumbnail= document.createElement('div');
          thumbnail.setAttribute('class', 'thumbnail');
          var image= document.createElement('img');
          var caption= document.createElement('div');
          caption.setAttribute('class', 'caption');
          var button= document.createElement('p');
          button.setAttribute('class', 'btn btn-default');

          caption.appendChild(button);
          image.appendChild(caption);
          thumbnail.appendChild(image);
          menuColumn.appendChild(thumbnail);
          document.getElementById('menu-row').appendChild(menuColumn);
        }
      }
    }; 
    xhr.open('GET', '/js/menu.json', true)
    xhr.send(null);
    //console.log("file sent");
//   });
// };


