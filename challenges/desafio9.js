db.produtos.updateMany(
    { nome: { $eq: "Cheddar McMelt" } }, // filtro. remove o último ingrediente onde o nome for Cheddar McMelt
    { $pop: { ingredientes: +1 } }, // uso o +1 porque quero remover o último item do array ingredientes. 
); // 

db.produtos.find(
    {},
    { 
        nome: true,
        ingredientes: true,
        _id: false,
    },
);
