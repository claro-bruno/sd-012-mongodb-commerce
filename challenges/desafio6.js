db.produtos.updateMany(
  {
    nome: { $in: ["Big Mac", "Quarteirão com Queijo"] },
  },
  {
    $addToSet: { ingredientes: "bacon" },
  },
  {
    $upsert: true,
  },
);

db.produtos.find(
  {},
  {
    nome: true,
    ingredientes: true,
    _id: false,
  },
);
