document.querySelector(".class1").addEventListener("click",function(){alert("Hello you have clicked me!!")}) 
document.querySelector("#id2").innerHTML="I will see you!!!!";
$(document).keypress(function(event){
   
$("h1").html(event.key);
console.log($("h1").html());
})
$("h1").on("mouseover",function(){
    $("h1").addClass("test-class1");

})