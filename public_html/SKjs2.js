var sk = {
	ime: "Svet kompjutera",
	godineIzlaska: 33
};

/* JSON
{
    "ime":"Svet kompjutera"
    "godineIzlaska":33
}
*/

//pretvaranje objekta u JSON
console.log("JSON: ", JSON.stringify(sk));
//ispisuje se JSON string kao u komentaru iznad

//prebacivanje iz JSON stringa u JavaScript objekat
var jsonValue = JSON.parse('{"ime":"Svet kopmjutera","godineIzlaska":33}');
console.log("Objekat: ", jsonValue);
//ispisuje se objekat isti kao objekat sk

