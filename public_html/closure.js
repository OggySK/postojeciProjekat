

function funkcija1() {
    var ime = 'Svet kompjutera';
    function funkcija2() {
        alert(ime);
    }
    return closure;
}

var f = funkcija2();
//f = closure
f(); //ispisuje "Svet kompjutera"