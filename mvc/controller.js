var controller = ((doc, model, jokes) => {

    model.clickBtnOkay(() => {
        jokes.crackRandomJoke((joke) => {
            model.crackJoke(joke);
        });
        
    });

})(document, model, jokesProvider);