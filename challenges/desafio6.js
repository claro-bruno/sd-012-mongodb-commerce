db.produtos.updateMany(
    { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, // filtro: Se o nome for um desses 2, aí faz o addToSet.
    {
  $addToSet: { ingredientes: "bacon" },
    }, // O addToSet vai adicionar bacon ao array ingredientes(mas nos objetos PRODUTOS onde o nome for Big Mac ou Quarteirão com Queijo). 
  );
  db.produtos.find(
    {},
    { 
        nome: true,
        ingredientes: true,
        _id: false,
    },
);