var random_number1=Math.floor(Math.random()*6)+1;
var random_name1="dice"+random_number1+".png";
var random_imagesource1="images/"+random_name1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_imagesource1);

var random_number2=Math.floor(Math.random()*6)+1;
var random_name2="dice"+random_number2+".png";
var random_imagesource2="images/"+random_name2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_imagesource2);

if(random_number1>random_number2)
{
  document.querySelector("h1").innerHTML="⛳Player 1 wins";
}

else if(random_number1<random_number2)
{
  document.querySelector("h1").innerHTML="⛳Player 2 wins";
}

else
{
  document.querySelector("h1").innerHTML="Draw";
}
