var getSquareColor = function(row, col){
  if(row % 2 > 0){
    if(col % 2 > 0){
      return '#000000';
    }
    else{
      return '#FF0000';
    }
  }
  else{
    if(col % 2 > 0){
      return 'red';
    }
    else{
      return 'black';
    }
  }
};


for (var row = 1; row < 10; row++){
  for (var col = 1; col < 10; col++){
    var square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    square.style.backgroundColor = getSquareColor(row, col);
    document.body.appendChild(square);
  }
}
