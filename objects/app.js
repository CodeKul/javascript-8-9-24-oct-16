
// function Car() { // default cons
//     this.name = 'Audi';
//     this.price = 12;
// };

function Car(name,price){ // paramaterized
    this.name = name; // state -> fileds -> properties
    this.price = price;

    this.showMeCarPrice = function(){ // behaviour -> function -> method
        document.writeln('Price is '+this.price);
    };

    this.whatsName = function () {
        document.writeln('Name is '+this.name);
    };
};

// var car1 = new Car(); // default
// document.writeln('Default : Name is '+car1.name);

var car2 = new Car('Bmw',12); // paramaterized
document.writeln('Paramatrized : Name is '+car2.name);
car2.showMeCarPrice();
car2.whatsName();

function myFun(){

}

function myName(){

    return function(){

    };
}