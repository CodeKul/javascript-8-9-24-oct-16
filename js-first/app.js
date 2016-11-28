var AppOld = (function () { })();
var App = ((doc) => {

    doc.getElementById('textName').onkeyup = () => {
        doc.getElementById('divInfo').innerHTML = doc.getElementById('textName').value;
    };

})(document); // IIFE - immediately invokable Function Expression