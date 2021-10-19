db.produtos.updateMany(
  {},
  { $unset: { ingredientes: "cebola" } },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);