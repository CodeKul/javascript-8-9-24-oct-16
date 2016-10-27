
var phoneName = 'Outer';
function myFun() {
    'use strict';
    var phoneName = 'Android';
    document.writeln('<h1>inside :: '+phoneName);
}

//myFun();

h = myFun;

m = 10;

h();


document.writeln('<h1>outside :: '+phoneName);
document.writeln('<h1> M is :: '+m);

