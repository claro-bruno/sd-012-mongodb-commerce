db.produtos.updateMany(
    {}, 
    { $pull: { ingredientes: "cebola" } }, // sem [] ao redor de "cebola".
); // o pull remove elementos de array. Nesse caso, quero tirar o elemento "cebola" dentro do ingredientes. O filtro é vazio, porque quero retirar cebola do array ingredientes em todos os objetos dentro da coleção PRODUTOS.

db.produtos.find(
    {},
    { 
        nome: true,
        ingredientes: true,
        _id: false,
    },
);
