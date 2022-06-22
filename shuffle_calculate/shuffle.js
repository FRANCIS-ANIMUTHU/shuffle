var input = document.getElementById('input');
var numbers = document.getElementsByClassName('numbers');
//console.log(input,numbers);

for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i].value);
    var number = numbers[i];
    number.addEventListener('click', tapnumber);
    function tapnumber() {
        console.log(this.value);
        var inputvalue = parseInt(input.value);
        var clickvalue = parseInt(this.value);
        input.value = (inputvalue * 10) + clickvalue;

    }
}
var element=document.getElementById('buttons');
element.addEventListener('click',shuffle);
var buttonvalues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function shuffle() {
    var currentIndex = buttonvalues.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [buttonvalues[currentIndex], buttonvalues[randomIndex]] = [
        buttonvalues[randomIndex], buttonvalues[currentIndex]];
  }
  for(i=0;i<buttonvalues.length;i++){
      var keyorder='keypad-'+buttonvalues[i];
      console.log(keyorder);
      var keyelement=document.getElementById(keyorder);
      console.log(keyelement);
      element.prepend(keyelement);
    
  }
  var refresh=document.getElementById('refresh');
  refresh.addEventListener('click',reset);
  function reset(){
      input.value=0;
  }


   

//setTimeout(shuffle,1000)
}
//shuffle();
