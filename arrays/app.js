var status = isNaN('1000');
document.writeln('Is A Number - '+status);

var cities = ['Pune','Mumbai','Stara','Karad','Sangli','Kolhapur'];

var numbers = [
    1, 2, 3 , 0, 4, 5, 6, 7 ,8 ,9, 0, 0,'android'
];
var sixIndex = numbers.indexOf(6);
dwl('Index of 6 is '+sixIndex);
dwl('Multiplication is '+(numbers[0] * numbers[5]));

var cars = new Array('Bmw','Mercedez','Audi','Bently','May Beach','Rollce Royce');
dwl('Car Array Length - '+cars.length);
var bmwIndex = cars.indexOf('Bmw');
dwl('Bmw Index is - '+bmwIndex);

var elements = document.getElementsByName('input');

var matrix = [
    ['Android','Apple','Black Berry', 'Windows','Symbian'],
    [100,200,300,400,500,600, cars]
];

dwl('Matrix [0][0] = '+matrix[0][0]);
dwl('Matrix [1][0] = '+matrix[1][0]);
dwl('Matrix [1][5][0] = '+matrix[1][6][0]);

dwl('City @ 1th - '+cities[0]);
dwl('Element At last location - '+numbers[numbers.length - 1]);
dwl('Last Index of 0 - '+numbers.lastIndexOf(0));

function dwl(msg){
    document.writeln('<div>'+msg +'</div>');
}
