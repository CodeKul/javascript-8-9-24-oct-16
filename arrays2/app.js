var os = [
    'Android',
    'Java',
    'Apple',
    'Rim',
    'Symbian'
];

dwln('2nd - '+os[2]);
dwln('3rd - '+os[3]);

function dwln(msg){
    document.writeln('<div>'+msg +'</div>');
}

var cities = [];
cities[0] = 'Pune';
cities[1] = 'Sangli';
cities[2] = 'Mumbai';
cities[3] = 'Nasik';

dwln('City 1 = '+cities[0]);
dwln('City 2 = '+cities[1]);

var bikes = new Array('Bmw','Ducati','Yahama','Honda','Duke','Bullet');
bikes.push('CBR');

/*dwln('Length of bikes array - '+bikes.length);

var lastIndex = bikes.length - 1; // avoided
dwln('Last Element - '+bikes[lastIndex]);
dwln('Last Element - '+bikes[bikes.length - 1]);

var popped = bikes.pop();
dwln('Popped Element - '+popped);
dwln('Length of bikes array - '+bikes.length);

dwln('Before Slice - '+bikes[1]);
var sliced = bikes.slice(0,5);
for(var i = 0; i < sliced.length; i++){
    dwln('Sliced - '+sliced[i]);
}
dwln('After Slice - '+bikes[1]);
dwln('Length of bikes array - '+bikes.length);*/

pritEls(bikes);

dwln('Length before splice - '+bikes.length);
var spliced = bikes.splice(2,3);
pritEls(spliced);
dwln('Length after splice - '+bikes.length);
pritEls(bikes);

function pritEls(arr){
  for(var i = 0; i < arr.length; i++){
    dwln('arr[' + i + '] = '+arr[i]);
 }  
}

var myArr = [
    [1,2,[11,12,13]],
    [4,5,6],
    [7,8,9]
];

var myArr0th = myArr[0];
dwln('myArr[0][0] - '+myArr0th[0]);
dwln('myArr[0][0] - '+myArr[0][2][0]);
dwln(''+myArr);