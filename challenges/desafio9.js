db.produtos.updateOne(
    { nome: "Cheddar McMelt" },
    { $pop: { ingredietes: 1 } },
);

db.produtos.find(
    {},
    { _id: 0, nome: 1, ingredientes: 1 },
);
