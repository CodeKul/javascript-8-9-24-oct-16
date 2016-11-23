var calcModule = (function (doc) {

    var textResult = doc.getElementById('textResult');

    var btnAdd = doc.getElementById('btnAdd');
    btnAdd.onclick = () => {
        var num1 = parseInt(doc.getElementById('ipNum1').value);
        var num2 = parseInt(doc.getElementById('ipNum2').value);
        textResult.className ="bg-info";
       // textResult.style.fontSize='20px';
        textResult.innerHTML = num1 + num2;
    };

    var btnSub = doc.getElementById('btnSub');
    btnSub.onclick = () => {
        var num1 = parseInt(doc.getElementById('ipNum1').value);
        var num2 = parseInt(doc.getElementById('ipNum2').value);
        textResult.className ="bg-danger";
        textResult.innerHTML = num1 - num2;
    };

    var btnMul = doc.getElementById('btnMul');
    btnMul.onclick = () => {
        var num1 = parseInt(doc.getElementById('ipNum1').value);
        var num2 = parseInt(doc.getElementById('ipNum2').value);
        textResult.innerHTML = num1 * num2;
    };

    var btnDiv = doc.getElementById('btnDiv');
    btnDiv.onclick = () => {
        var num1 = parseInt(doc.getElementById('ipNum1').value);
        var num2 = parseInt(doc.getElementById('ipNum2').value);
        textResult.innerHTML = num1 / num2;
    };
})(document);