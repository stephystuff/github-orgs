(function (){
  window.ns = window.ns || {};

  var something = function addOneItemToUl(){
    var listItem = document.createElement('li');
    var image = document.createElement('img');
    listItem.appendChild(image)
    var paragraph = document.createElement('p');
    listItem.appendChild(paragraph)

    document.querySelector('ul').appendChild(listItem);
  }

  window.ns.addOneItemToUl = something
})();
