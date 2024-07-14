var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomImage="Dice"+randomNumber1+".png";
var randomImage1="Dice"+randomNumber2+".png";
var imageSource="images/"+randomImage;
var imageSource1="images/"+randomImage1;
var image1=document.querySelectorAll("img")[0].setAttribute("src",imageSource);
var image2=document.querySelectorAll("img")[1].setAttribute("src",imageSource1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins :D"
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins :D"
} else {
    document.querySelector("h1").innerHTML="Match Drawn!!!"
}