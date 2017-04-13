var getRandomSquareColor = function(){
  var hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  var hexColor = '#';
  for (var i = 0; i < 6; i++){
    var randomNum = Math.floor((Math.random() * 16));
    hexColor = hexColor + hexValues[randomNum];
  }
  return hexColor;
};

var changeColors = function(){
  var divTags = document.getElementsByTagName('div');
  for (i = 0; i < divTags.length; i++){
    divTags[i].style.backgroundColor = getRandomSquareColor();
  }
};

var timer = setInterval(changeColors, 2000);

for (var row = 1; row < 10; row++){
  for (var col = 1; col < 10; col++){
    var square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    square.style.backgroundColor = getRandomSquareColor();
    document.body.appendChild(square);
  }
}
