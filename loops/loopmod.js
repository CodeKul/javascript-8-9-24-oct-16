var loopModule = (function(printer){

    var cities = ['Pune','Mumbai','Nagpur','chennai'];

    for(var i = 0; i < cities.length; i++){
        printer.print('For '+cities[i]);
    }

    for(var city of cities){
        printer.print('For Of '+city);
    }

    cities.forEach(function(element,index){
        printer.print('Element - '+element + 'Index - '+index);
    });

    cities.forEach(function(element){
        printer.print('Element - '+element );
    });

    cities.forEach(element => printer.print(' => '+element));

    function my(x, y){
        return x*x + y*y;
    }

    var result = (x,y) => x*x + y*y; // fat arrows
    printer.print('Result - '+result(10,10));
    printer.print('My - '+my(10,10));

    var square = x => {
        return x*x;
    };

    printer.print('Square - '+square(10));

    var cars = {
        name : 'Audi',
        price : 10,
        city : 'Mumbai',
        calc : (x,y) => x*x + y*y  // fat arrows
    };

    for (var key in cars){
        printer.print('Key - '+key + ' Value - '+cars[key]);
    }

    printer.print('Some chalange - '+cars.calc(10,12));

})(mySpace.dwln);

