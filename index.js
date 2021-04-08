image_array = [
   "dice1.png",
   "dice2.png",
   "dice3.png",
   "dice4.png",
   "dice5.png",
   "dice6.png",
];



  var  randomNumber1 = Math.floor(Math.random() * image_array.length);

   var selected_image = image_array[randomNumber1]; 
   
   document.getElementsByClassName("img1")[0].setAttribute("src", "selected_image");



