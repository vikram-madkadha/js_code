function beerBottles(noOfBottles){
while(noOfBottles){
    var bottleword="bottles"
    if(noOfBottles===1){
        var bottleword="bottle";
    }
    console.log(+noOfBottles+" " +bottleword+" of beer on the wall, "+noOfBottles+" "+bottleword+" of beer.")
    noOfBottles--;
    console.log("Take one down and pass it around, "+noOfBottles+" "+bottleword+" of beer on the wall.")
}
}
beerBottles(99);