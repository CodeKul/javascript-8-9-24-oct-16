var str = 'hi i  = ';
console.log('i = ' + 10 + 10);
console.log(str + (10 + 10));

var num1 = 10;
var num2 = 20;
console.log('Addition is - '+(num1 + num2));
console.log('Multiplication is - '+(num1 * num2));
console.log('Substraction is - '+(num1 - num2));
console.log('Division is - '+(num1 / num2));

var m = console.log;

function operation(op, num1, num2) { // defination
  if(op === '+') lg('Addition is - '+(num1 + num2));
  if(op === '-') lg('Substraction is - '+(num1 - num2));
  if(op === '*') lg('Multiplication is '+(num1 * num2));
  if(op === '/') m('Division is '+(num1 / num2));
}

operation('+',10,20); // call
operation('-',10,20);
operation('*',10,20);
operation('/',10,20);

function lg(msg){
  console.log(msg);
}

function operationVer2(op, num1, num2) {
  vanr result = 0;

  if(op === '+') result = num1 + num2;
  if(op === '-') result = num1 - num2;
  if(op === '*') result = num1 * num2;
  if(op === '/') result = num1 / num2;

  return result;
}

var res = operationVer2('*',9857,300);
lg('Sum of two nums is '+ res);
res = operationVer2('+',9857,300);

lg('Result --- '+result);
