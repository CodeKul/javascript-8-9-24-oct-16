function dwl(msg) {
    document.writeln('<div>' + msg + '</div>');    
}

dwl('Android');

function upperAndReverse(country) {
    // makeit uppercase
    var processedData = country.toUpperCase();

    return processedData; 
}

var country = upperAndReverse('india');
dwl('Country is - '+country);

function deposit(amt){

}

function withdraw(amt) {

}

function balanceInquiry(){
    var bal = 500;
    bal = bal * 10000;
    dwl('Balance is Rs.'+bal +'CR');
}

balanceInquiry();

