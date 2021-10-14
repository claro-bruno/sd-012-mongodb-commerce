db.produtos.updateMany(
    { nome: { $eq: "Quarteirão com Queijo" } }, // filtro 
    { $pop: { ingredientes: -1 } }, // uso o -1 porque quero remover o primeiro item do array ingredientes. Se quisesse remover, o último, aí colocaria +1
); // o $pop remove o primeiro ou último elemento de um array.

db.produtos.find(
    {},
    { 
        nome: true,
        ingredientes: true,
        _id: false,
    },
);
