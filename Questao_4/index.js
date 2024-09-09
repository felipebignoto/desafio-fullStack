const legumes = ['batata', 'cenoura', 'mandioca', 'abobora', 'pepino'];

function listar() {
    legumes.forEach((element, i) => {
        console.log(element + ' - ' + i);
    });
}

listar();
