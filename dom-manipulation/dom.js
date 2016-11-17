var domModule = (function(doc){

    var btnOkay = doc.getElementById('btnOkay');
    btnOkay.onclick = () => {
        var name = doc.getElementById('textName').value;
        doc.getElementById('textName').value = name.toUpperCase();
    };

    // btnOkay.onclick = function gg(){
    //     alert('Hi');
    // };
    //btnOkay.onclick = myClick;

    function myClick(){
        alert('Hi');
    };

})(document);