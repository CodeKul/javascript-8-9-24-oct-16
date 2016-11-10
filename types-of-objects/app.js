
var objLit = {
    //key : value
    name : 'Angular2',
    duration : 1,
    topics : [
        'Basics of TS',
        'Components',
        'Pipes',
        'DataBinding',
        'etc'
    ],
    calculateFees : function() {
       var fees = this.duration * 1;
        our.dwln(fees);
    },
    printMe : function (){
        our.dwln('Name - ' + this.name);
        my.dwln('Duration - ' + this.duration);
        for(var i = 0 ; i < this.topics.length; i++){
            our.dwln('Topic - ' + this.topics[i]);
        }
    } 
};

our.dwln('Name - ' +objLit.name);
our.dwln('Duration - ' +objLit.duration);
our.dwln('Topics - '+objLit.topics[1]);
objLit.calculateFees();
objLit.printMe();

objInfo.showInfo(objLit);

my.dwln('Name - '+objLit['duration']);
