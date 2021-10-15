db.produtos.updateMany(
  { ingredientes: "cebola" },
  {
    $pull: { ingredientes: "cebola" },
  },
);

db.produtos.find(
  {},
  { _id: 0, ingredientes: 1, nome: 1 },
);
