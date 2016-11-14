var modDwln = (function(){
    var retObj = {
        dwln : function(msg){
            document.writeln('<div>'+msg+'</div>');
        }
    };
    return retObj;
})();