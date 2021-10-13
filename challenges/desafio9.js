db.produtos.updateOne(
  { nome: "Cheddar McMelt" },
  { $pop: { ingredientes: 1 } },
);

db.produtos.find(
  {},
  { ingredientes: 1, nome: 1, _id: 0 },
);
