db.produtos.updateMany(
    { nome: { $in: ["Quarteirão com Queijo", "Big Mac"] } },
    { $addToSet: { ingredientes: "bacon" } },
);

db.produtos.find(
    {},
    { _id: 0, nome: 1, ingredientes: 1 },
);
