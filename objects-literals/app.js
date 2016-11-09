function printSomething(){
   console.log('Hi');
    return 10;
};

setTimeout(printSomething,1);

var i = printSomething; // assigning them to variables
//document.writeln('<br>i = '+i);

function printElse(otherFun) { // passing as params
    document.writeln('<br> otherFun = ' + otherFun);
    document.writeln('<br> otherFun() = ' + otherFun())
}

function getNewFunction(){
    return printSomething; // returning them as functions
}

var fun = getNewFunction();
document.writeln('<br> fun = ' + fun);
document.writeln('<br> fun() = ' + fun());

var funs = new Array(); // storing them in ds
funs[0] = printSomething;
funs[1] = printElse;

for(var o = 0; o < funs.length ; o++)
{
    document.writeln('<br> fun is - ' + funs[o]);
}


//printElse(printSomething); // passing them as argument
//printElse(printSomething); // passing them as argument
