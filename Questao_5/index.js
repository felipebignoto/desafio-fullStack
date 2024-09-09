let products = [
    {barCode: 1, name: "Nome 1", brand: "Omo1",qtd:1,price:10.00},
    {barCode: 2, name: "Nome 2", brand: "Omo2",qtd:2,price:15.00},
    {barCode: 3, name: "Nome 3", brand: "Omo3",qtd:3,price:2.00}
]

function calculaVenda(){
    let total = 0;
    products.map((e,i) => {
        console.log(e.barCode + " - " + e.name + "= R$" + e.price * e.qtd)
        total += e.price * e.qtd
    })
    console.log("Total = R$" + total)
}

calculaVenda()