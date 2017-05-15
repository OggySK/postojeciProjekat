var prviObjekat = new Object();
var drugiObjekat = {};
var treciObjekat = {
    ime: "Svet kompjutera",
    godineIzlazenja: 33,
    sviPodaci: function ()
    {
        return this.ime + " " + this.godineIzlazenja;
    }
};

console.log(treciObjekat.ime);   //Svet kompjutera
console.log(treciObjekat["ime"]);//Svet kompjutera

var x = "ime";
console.log(treciObjekat.x);     //undefined
console.log(treciObjekat[x]);    //Svet kompjutera   

treciObjekat.ime2 = "casopis";
console.log(treciObjekat.ime2); //casopis
console.log(treciObjekat.sviPodaci());
//Svet kompjutera 33



















