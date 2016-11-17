var printerModule = (function(){
    return {
        print : msg => document.writeln('<div>'+msg +'</div>'),
    };
})();