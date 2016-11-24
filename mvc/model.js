var model = ((doc) => {
    return {
        ipUserName: doc.getElementById('ipUserName'),
        btnOkay: (msg) => doc.getElementById('btnOkay').onclick = () =>{
            this.divResult.innerHTML = msg;
        },
        divResult: doc.getElementById('divResult'),
        crackJoke : (result) => this.divResult.innerHTML = result
    };
})(document);