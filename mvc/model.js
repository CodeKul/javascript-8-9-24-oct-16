var model = ((doc) => {
    return {
        ipUserName: doc.getElementById('ipUserName'),
        clickBtnOkay: (myFun) => doc.getElementById('btnOkay').onclick = () => myFun(),
        divResult: doc.getElementById('divResult'),
        crackJoke : (result) => this.divResult.innerHTML = result
    };
})(document);