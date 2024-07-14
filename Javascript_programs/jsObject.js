var name1={
    name:"Swavik",
    age: 30,
    address:"Pratapgarh",
    language:["English", "French", "Hindi"]
}
document.getElementById("nameSpeaker").addEventListener("click",function(){
    alert("Hello my name is "+name1.name);
    var nameSaved=name1.name;
    console.log(nameSaved);
})
document.getElementById("nameSpeaker").addEventListener("keypress",function(event){
   alert("The key was pressed");
   console.log(event);

})
