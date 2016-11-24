var controller = ((doc, model, jokes) => {
    model.btnOkay('hi how are you' + jokes.crackRandomJoke());
})(document, model, jokesProvider);