var Controller = ((model, joke) => {

    // model.btnOkay.onclick = () => {
    //     model.textName.value = 'Hello';
    // };


    // model.btnOkayClick2(function(){
    //     model.setTextName('Older function');
    // });

    model.btnOkayClick(() => {
        joke.produceRandomJoke(result => {
            model.setTextName(result.value.joke);
        });
    });
})(Model, Service);