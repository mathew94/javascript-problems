var business = 950;
var minister = 650;
var shochib = 1050;

var max = Math.max(business, minister, shochib);
console.log(max);


if(business > minister){
    if(business > shochib){
        console.log("Business is bigger");
    }
    else{
        console.log("Shochib is bigger");
    }
}
else{
    if(minister > shochib){
        console.log("Minister is bigger");
    }
    else{
        console.log("Shochib is bigger");
    }
}