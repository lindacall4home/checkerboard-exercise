var buildRgbaColorString = function(red, green, blue, alpha){
  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
};

var getGradientColor = function(row, col){
  var red = 232;
  var green = 100;
  var blue = 50;
  var alpha = 0.8;
  var greenOffset = (row * 3) + (col * 3);
  var alphaOffset = (row * 0.01) + (col * 0.01);

  if(row % 2 > 0){
    if(col % 2 > 0){
      return buildRgbaColorString(red, green - greenOffset, blue, alpha + alphaOffset);
    }
    else{
      return buildRgbaColorString(red, green + greenOffset, blue, alpha + alphaOffset);
    }
  }
  else{
    if(col % 2 > 0){
      return buildRgbaColorString(red, green + greenOffset, blue, alpha + alphaOffset);
    }
    else{
      return buildRgbaColorString(red, green - greenOffset, blue, alpha + alphaOffset);
    }
  }
};


for (var row = 1; row < 10; row++){
  for (var col = 1; col < 10; col++){
    var square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    square.style.backgroundColor = getGradientColor(row, col);
    document.body.appendChild(square);
  }
}
