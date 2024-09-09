let arrayDeObjetos = [
    { nome: "Alice", idade: 25, cidade: "São Paulo" },
    { nome: "Bob", idade: 30, cidade: "Rio de Janeiro", profissão: "Engenheiro" },
    { nome: "Carol", idade: 22, cidade: "Belo Horizonte" }
];

// Acesse o objeto na posição 1
let objetoNaPosicao1 = arrayDeObjetos[1];

// Obtenha as chaves do objeto
let chaves = Object.keys(objetoNaPosicao1);

// Imprima as chaves
console.log(chaves);