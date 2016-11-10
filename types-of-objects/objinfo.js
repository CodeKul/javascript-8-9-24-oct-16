var objInfo = {
    showInfo : function(anyObj){
        for (var any in anyObj) {
            my.dwln(any + ' : '+anyObj[any]);
        };
    }
};