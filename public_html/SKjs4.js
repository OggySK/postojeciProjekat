radiHoist();
// piše "Da!"
neRadiHoist();
// greška!

console.log(x); 
//nije greška
//ali piše undefined

function radiHoist() {
    console.log("Da!");
}
var neRadiHoist = function () {
    console.log("Ne!");
};

var x = 5;
console.log(x);
//piše 5


