var Model = ((doc)=>{
    return {
        textName : doc.getElementById('textName'),
        btnOkay : doc.getElementById('btnOkay'),
        divInfo : doc.getElementById('divInfo'),
        setTextName : text => this.divInfo.innerHTML = text,
        btnOkayClick : (funClick) => this.btnOkay.onclick = () => funClick(),
        btnOkayClick2 : function(funClick){
            this.btnOkay.onclick = function (){
                funClick();
            };
        }
    };
})(document);