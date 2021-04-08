
  var  randomNumber1 = Math.floor(Math.random() * 6 + 1); // give us random number from 1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//for randomized image2 

var randomNumber2 = Math.floor(Math.random() * 6 + 1); // give us random number from 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);
