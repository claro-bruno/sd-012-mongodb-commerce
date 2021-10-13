db.produtos.updateMany(
  { ingredientes: { $in: ["cebola"] } },
  {
    $pull: { ingredientes: "cebola" },
  },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: 0 },
);
