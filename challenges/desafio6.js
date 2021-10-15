db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $addToSet: { ingredientes: "bacon" } },
);

db.produtos.find(
  {},
  { _id: 0, ingredientes: 1, nome: 1 },
);