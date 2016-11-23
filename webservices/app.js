var appModule = (function(doc,ws){

    var divJoke = doc.getElementById('divJoke');
    var btnJoke = doc.getElementById('btnJoke');
    btnJoke.onclick = () => {
       var data = ws.randomJokes();
       divJoke.innerHTML = data;
    };
})(document,wsModule);