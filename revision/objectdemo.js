var objectDemo = (function (modDwln) {

    var myObj = {
        name: 'Android',
        ws: null
    };

    for (var key in myObj) {
        modDwln.dwln('key is - '+key);
    }
    modDwln.dwln(myObj.name);
    modDwln.dwln(myObj.temp);
    modDwln.dwln(myObj.ws);

    myObj.name = 'Apple';
    myObj[name] = 'Java';
    myObj[1] = 'TypeScript';

    modDwln.dwln('myObj[name] = '+myObj[name]);
    modDwln.dwln('myObj.name = '+myObj.name);
    modDwln.dwln('myObj[1] = '+myObj[1]);
})(modDwln);
