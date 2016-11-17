var domModule = (function (doc, printer) {
    'use strict';

    var btnOkay = doc.getElementById('btnOkay');
    btnOkay.onclick = () => {
        var name = doc.getElementById('textName').value;
        doc.getElementById('textName').value = name.toUpperCase();
    };

    var retObj = {
        keyGotIt: () => {
            var typed = doc.getElementById('textOs');
            var divOs = doc.getElementById('divOs');
            divOs.innerHTML = typed.value;
        },
        keyGotItAgain: (typed, div) => div.innerHTML = typed.value
    };

    var textMobile = doc.getElementById('textMobile');
    textMobile.onkeyup = () => {
        var typed = doc.getElementById('textMobile');
        var divOs = doc.getElementById('divMobile');
        divOs.innerHTML = typed.value;
    };

    return retObj;

})(document, printerModule);

function hello (){
    console.log('Hi');
}