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
      }
    } 
    xhr.open('GET', '/js/menu.json', true)
    xhr.send(null);
    //console.log("file sent");
//   });
// };




/*var menuContainer = document.getElementById('menu-populate')
menu.addEventListener('click', function() {menuContainer.className='show'; })


var menu= document.getElementById('menu-nav');
menu.addEventListener('click', function(e) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if(xhr.status === 200) {
    if(xhr.readyState===4) {
      document.getElementById('menu-populate').innerHTML = xhr.responseText;
      }
    }
  }
  xhr.open('GET', '/menu.json', true);
  xhr.send(null);
  console.log('request sent');
}, false);



fs.readFileSync('/menu.json', function () {
  console.log("server found")
});

function loadJSON (callback) {
  var xhr= new XMLHTTPRequest();
  xhr.overrideMimeType('appliation/json');
  xhr.open('GET', 'menu.json', true);
  xhr.onreadystatechange= function() {
    if(xhr.status==="200") {
      callback(xhr.responseText);
    }
  }
xhr.send(null);
}

function populate() {
  loadJSON(function(response) {
    var newJSON = JSON.parse(response);
  });
  var menuData= document.getElementById('show-menu');
  menuData.appendChild;
}


function item (name, price) {
  this.name = name;
  this.price= price;
};*/


