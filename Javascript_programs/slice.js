document.getElementById('executeButton').addEventListener('click', function() {
var tweet="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sent"
alert(tweet.toUpperCase().slice(0,200));
var name =prompt("What is your name?");
var first=name.slice(0,1).toUpperCase();
var second=name.slice(1,name.length).toLowerCase();
alert("Hello"+ " " +first+second);
var number=prompt("Enter the number");
if (number==0){
    alert("Please enter a valid number");
}else if(number%2==0){
    alert("The number is even")
}else{
    alert("The number is odd");
}
});
document.getElementById('executeButton1').addEventListener('click', function() {
var dogAge=prompt("Enter the age of dog");
var humanAge=(dogAge-2)*4+21;
alert("The age of the dog as per Human years "+humanAge);
});
document.getElementById('executeButton2').addEventListener('click', function() {
prompt("Enter the name of the boy");
prompt("Enter the name of the girl");    
luvCalc();
});
function luvCalc(){
    var loveP= Math.random() * 100;
    loveP=Math.floor(loveP) + 1;
    console.log("Your love percentage is: "+loveP);
}
