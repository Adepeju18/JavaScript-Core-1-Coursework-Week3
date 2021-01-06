// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
let map1 = numbers.map(numbers=>{
    return numbers *100
});
//console.log(map1);

let map2 = numbers.map(numbers=> numbers * 100);
//console.log(map2);
    
let map3 = numbers.map(function(numbers){
    return numbers *100;
});
//console.log(map3);

function multiplyBy100(number){
    return number*100;
}
var result=numbers.map (multiplyBy100);
console.log(result);