var queryModule = (function(doc){
    return (xyz) => doc.querySelector(xyz);

    // return function(selector){
    //     var ele = doc.querySelector(selector);
    //     return ele;
    // };
})(document);
